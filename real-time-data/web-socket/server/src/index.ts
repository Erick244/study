import express from "express";
import { Server } from "socket.io";

const app = express();

const server = app.listen(3000, () => {
    console.log("Server running at port 3000!");
});

const io = new Server(server, {
    path: "/",
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log("Connected!");

    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });

    socket.on("disconnect", () => console.log("Disconnected!"));
});
