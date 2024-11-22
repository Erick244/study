import { randomUUID } from "crypto";
import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

type Client = {
    resolve: (msg: string) => void;
};

const clients: Map<string, Client> = new Map();

app.get("/subscribe", (req, res) => {
    const clientId = randomUUID();
    console.log(`Client ${clientId} connected!`);

    const clientResponse = new Promise<string>((resolve) => {
        clients.set(clientId, {
            resolve,
        });
    });

    clientResponse.then((msg) => {
        res.json({ msg });
    });
});

app.post("/publish", (req, res) => {
    const { msg } = req.body;

    clients.forEach((client) => client.resolve(msg));
    clients.clear();

    res.json({ status: "Event published!" });
});

app.use(express.static("public"));

app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});
