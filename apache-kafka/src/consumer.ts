import { Kafka } from "kafkajs";

export async function consume(kafka: Kafka) {
    // Crie uma instancia de Consumer
    const consumer = kafka.consumer({ groupId: "topic-group" });

    // Conecta o consumer ao Broker
    await consumer.connect();
    // Inscreve o consumer para escutar a um tópico
    await consumer.subscribe({ topic: "test-topic", fromBeginning: true }); // fromBeginning: ativa desde o inicio

    // Le as mensagens recebidas
    await consumer.run({
        eachMessage: async (payload) => {
            console.log(payload.message.value?.toString());
        },
    });
}
