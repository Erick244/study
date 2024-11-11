import { Kafka } from "kafkajs";

export async function produce(kafka: Kafka) {
    // Instancia um novo producer
    const producer = kafka.producer();

    // Conecta o producer ao Message Broker
    await producer.connect();
    // Envia uma mensagem
    await producer.send({
        topic: "test-topic",
        messages: [{ value: "Hello Apache Kafka!" }],
    });

    // Desconecta o producer do Broker
    await producer.disconnect();
}
