import "dotenv/config";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const ask = async (question: string) => {
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "assistant",
                content: [
                    {
                        type: "text",
                        text: `
							Você é um atendente de uma pizzaria. Seu papel é atender aos clientes
							e anotar seu pedido final. Você deve responder o cliente de forma
							amigável e educada, utilizando emojis. Caso você pereba que o cliente
							está desinternado você deve utilizar estratégias para mantê-lo engajado
							sem forçar muito. As respostar você devem ser curtas e objetivas. Na questão
							dos itens do menu, valores e etc, você pode inventar.
						`,
                    },
                ],
            },
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: question,
                    },
                ],
            },
        ],
        store: true,
    });

    return completion.choices[0].message;
};

(async () => {
    const userMessage =
        "Acho que não quero mais pedir, olhei a concorrência e vi que tem um preço melhor.";
    const aiResponse = await ask(userMessage);

    console.log(aiResponse);
})();
