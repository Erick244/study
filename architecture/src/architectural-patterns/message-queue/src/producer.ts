import amqp from "amqplib";

async function sendMessage(message: string) {
    // RabbitMQ Connection
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    // Queue Config
    const queue = "messages";
    await channel.assertQueue(queue, {
        durable: true, // Persiste a fila se caso o broker reiniciar.
    });

    // Sent message to queue
    await channel.sendToQueue(queue, Buffer.from(message));
    console.log(`Message ${message} sent to queue.`);

    // Close connection
    setTimeout(() => {
        connection.close();
    }, 500);
}

// Use
sendMessage("Hello world!");
