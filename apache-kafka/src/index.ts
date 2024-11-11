import { Kafka } from "kafkajs";
import { consume } from "./consumer";
import { produce } from "./producer";

const kafka = new Kafka({
    clientId: process.env.CLIENT_ID,
    brokers: [process.env.BOOTSTRAP_SERVER ?? ""],
    ssl: true,
    sasl: {
        mechanism: "plain",
        username: process.env.SASL_USERNAME ?? "",
        password: process.env.SASL_PASSWORD ?? "",
    },
});

export async function main() {
    await produce(kafka);
    await consume(kafka);
}

main();
