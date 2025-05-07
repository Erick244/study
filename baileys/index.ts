import * as Boom from "@hapi/boom";
import { AnyMessageContent, AuthenticationCreds, makeWASocket } from "baileys";
import { useMongoDBAuthState } from "mongo-baileys";
import { Document, MongoClient } from "mongodb";

const url = "mongodb://localhost:27017"; // When Obtaining Mongodb URL Choose NodeJS Driver Version 2 or Later but don't 3 or it higher
const dbName = "whatsapp";
const collectionName = "authState";

interface AuthDocument extends Document {
    _id: string;
    creds?: AuthenticationCreds;
}

async function connectToMongoDB() {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection<AuthDocument>(collectionName);
    return { client, collection };
}

async function startWhatsApp() {
    const { collection } = await connectToMongoDB();
    const { state, saveCreds } = await useMongoDBAuthState(collection);

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
    });

    sock.ev.on("creds.update", saveCreds);

    sock.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === "close") {
            const shouldReconnect =
                lastDisconnect && lastDisconnect.error
                    ? Boom.boomify(lastDisconnect.error).output.statusCode
                    : 500;
            console.log(
                "Connection closed due to",
                lastDisconnect?.error,
                ", reconnecting in",
                shouldReconnect,
                "ms"
            );
            if (shouldReconnect) {
                setTimeout(() => startWhatsApp(), shouldReconnect);
            }
        } else if (connection === "open") {
            console.log("Opened connection");
        }
    });

    sock.ev.on("messages.upsert", async (m) => {
        console.log(JSON.stringify(m, undefined, 2));

        const message = m.messages[0];
        if (message && !message.key.fromMe && m.type === "notify") {
            console.log("Replying to", message.key.remoteJid);
            await sock.sendMessage(message.key.remoteJid!, {
                text: "Hello there!",
            } as AnyMessageContent);
        }
    });
}

startWhatsApp().catch((err) => console.log("Unexpected error:", err));
