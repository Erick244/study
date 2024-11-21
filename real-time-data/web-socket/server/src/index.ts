import { createAdapter, setupPrimary } from "@socket.io/cluster-adapter";
import express from "express";
import cluster from "node:cluster";
import { availableParallelism } from "node:os";
import { Server } from "socket.io";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

if (cluster.isPrimary) {
    const numCPUs = availableParallelism();

    // Cria um operador de thread por core disponível.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork({
            PORT: 3000 + i,
        });
    }

    // Inicializa o thead primário
    setupPrimary();
} else {
    const app = express();

    // Obtém a porta da thread atuam, cada uma esta em uma porta diferente.
    const port = process.env.PORT;

    const server = app.listen(port, () => {
        console.log("Server running at port: " + port);
    });

    const io = new Server(server, {
        path: "/",
        cors: {
            origin: "*",
        },
        connectionStateRecovery: {},
        // Adiciona o adapter para cada thread
        adapter: createAdapter(),
    });

    const db = await open({
        filename: "chat.db",
        driver: sqlite3.Database,
    });

    await db.exec(`
	CREATE TABLE IF NOT EXISTS messages (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		client_offset TEXT UNIQUE,
		content TEXT
	)
`);

    io.on("connection", async (socket) => {
        console.log("Connected!");

        socket.on("chat message", async (msg, clientOffset, callback) => {
            try {
                const result = await db.run(
                    "INSERT INTO messages (content, client_offset) VALUES (?, ?)",
                    msg,
                    clientOffset
                );

                io.emit("chat message", msg, result.lastID);
            } catch (error) {
                console.error(error);
            } finally {
                callback();
            }
        });

        try {
            if (!socket.recovered) {
                const currentServerOffset =
                    socket.handshake.auth.serverOffset ?? 0;
                await db.each(
                    "SELECT id, content FROM messages WHERE id > ?",
                    currentServerOffset,
                    (_err, data) => {
                        socket.emit("chat message", data.content, data.id);
                    }
                );
            }
        } catch (error) {
            console.error(error);
        }

        socket.on("disconnect", () => console.log("Disconnected!"));
    });
}
