import amqp from "amqplib";

async function consumeMessage() {
    // RabbitMQ Connection
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    // Queue Config
    const queue = "messages";
    await channel.assertQueue(queue, {
        durable: true,
    });

    console.log("Waiting for messages...");

    channel.consume(
        queue,
        async (message) => {
            if (message) {
                const stringMessage = message.content.toString();
                console.log(`Received message: ${stringMessage}`);

                channel.ack(message); // Confirma que a mensagem foi processada
            }
        },
        {
            noAck: false, //  Evitar que a mensagem não processada sejam removidas.
        }
    );
}

// Use
consumeMessage();
