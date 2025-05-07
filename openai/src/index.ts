import "dotenv/config";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai",
});

(async () => {
    const tools: OpenAI.Chat.Completions.ChatCompletionTool[] = [
        {
            type: "function",
            function: {
                name: "register_client",
                description:
                    "Você deve ter os seguinte dados: nome, cpf e endereço, para registrar um cliente.",
                parameters: {
                    type: "object",
                    properties: {
                        name: { type: "string" },
                        cpf: { type: "string" },
                        address: { type: "string" },
                    },
                    required: ["name", "cpf", "address"],
                    additionalProperties: false,
                },
                strict: true,
            },
        },
    ];

    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        {
            role: "user",
            content:
                "Ola, gostaria de fazer meu cadastro. Nome: João, CPF: 123.456.789-00, Endereço: Rua A, 123",
        },
    ];

    const completion = await openai.chat.completions.create({
        model: "gemini-2.0-flash",
        messages,
        tools,
    });

    const message = completion.choices[0].message;
    const toolCalls = completion.choices[0].message.tool_calls;

    if (!toolCalls) {
        return;
    }

    for (const toolCall of toolCalls) {
        const args = JSON.parse(toolCall.function.arguments);
        let result = null;

        switch (toolCall.function.name) {
            case "register_client":
                result = `Cliente ${args.name} registrado com sucesso!`;
                break;
        }

        messages.push(message);
        messages.push({
            role: "tool",
            tool_call_id: toolCall.id,
            content: String(result),
        });
    }

    const finalCompletion = await openai.chat.completions.create({
        model: "gemini-2.0-flash",
        messages,
        tools,
    });

    console.log(finalCompletion.choices[0].message.content);
})();
