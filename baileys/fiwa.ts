import { FiWhatsAppClient } from "fiwa";
import qrcode from "qrcode-terminal";

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
        qrcode.generate(qr, { small: true });
    });

    client.on("ready", async () => {
        console.log("Client is ready");
    });

    client.on("message", (message) => {
        const jid = message.key.remoteJid;
        console.log(JSON.stringify(message, null, 2));

        console.log(
            "Text message: ",
            !!message.message?.["extendedTextMessage"]
        );

        client.sendText(jid!, "Hello world!");
    });

    await client.start();
}

startSession("1");
