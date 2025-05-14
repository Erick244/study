import { FiWhatsAppClient } from "fiwa";

let next = false;

async function startSession(id: string) {
    const client = new FiWhatsAppClient({
        mongodb: {
            url: "mongodb://localhost:27017/",
            databaseName: "fiwa",
            collectionName: id,
        },
    });

    client.on("qr", (qr) => {
        console.log("Scan this QR code:", qr);
    });

    client.on("ready", async () => {
        console.log("Client is ready");
    });

    client.on("message", (message) => {
        const jid = message.key.remoteJid;
        console.log(
            JSON.stringify(message.message?.extendedTextMessage, null, 2)
        );

        client.sendText(jid!, "Hello world!");
    });

    client.on("messageFromClient", async (message) => {
        console.log("Message from client: ", message);
    });

    await client.start();
}

startSession("1");
