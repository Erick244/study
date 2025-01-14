import * as venom from "venom-bot";

type BotConfig = {
    startNodeId: string;
    nodes: BotNode[];
};

type BotNode = {
    id: string;
    type: "choice" | "input" | "message";
    content: string;
    options?: BotOption[];
    priceList?: BotPrice[];
    actions?: BotAction[];
    nextNodeId?: string;
};

type BotOption = {
    responseValue: string;
    label: string;
    nextNodeId: string;
    actions?: BotAction[];
};

type BotPrice = {
    label: string;
    price: number;
};

type BotAction = {
    type: "setVariable" | "calculate";
    operation?: "sum" | "sub" | "mult" | "div";
    key: string;
    value: string;
};
export class Bot {
    private currentNode: BotNode;
    private currentContent: string = "";
    private isFirstInteraction: boolean = true;
    private client: venom.Whatsapp;
    private globalVariables: { [key in string]: any } = {};

    constructor(config: BotConfig) {
        this.currentNode = this.findNodeById(config.startNodeId, config);
        this.createBot().then(async (client) => {
            await this.handleMessages(client, config);
        });

        process.on("exit", async () => {
            console.log("Closing bot...");

            await this.client.close();
            process.exit();
        });
    }

    private async createBot() {
        const bot = await venom.create({
            session: "123",
            browserArgs: ["--no-sandbox"],
        });

        this.client = bot;

        return bot;
    }

    private findNodeById(id: string, config: BotConfig) {
        const node = config.nodes.find((node) => node.id === id);

        if (!node) {
            throw new Error(`Node with id ${id} not found`);
        }

        return node;
    }

    private async handleMessages(client: venom.Whatsapp, config: BotConfig) {
        await client.onMessage(async (message) => {
            this.setGlobalVariable(
                "{{username}}",
                message.sender.pushname.toUpperCase()
            );
            this.setGlobalVariable(
                "{{userResponse}}",
                message.body.toLowerCase().trim()
            );

            if (message.isGroupMsg) return;

            if (
                this.currentNode.type === "choice" &&
                !this.isFirstInteraction
            ) {
                if (!this.currentNode.options) return;

                const selectedOption = this.currentNode.options.find(
                    (option) =>
                        option.responseValue ===
                        this.getGlobalVariable("{{userResponse}}")
                );

                if (!selectedOption) {
                    await client.sendText(
                        message.from,
                        "Opção inválida, tente novamente"
                    );
                    return;
                }

                if (selectedOption.actions) {
                    this.handleActions(selectedOption.actions);
                }

                this.currentNode = this.findNodeById(
                    selectedOption.nextNodeId,
                    config
                );

                console.log(this.globalVariables);
            } else if (
                this.currentNode.type === "input" &&
                !this.isFirstInteraction
            ) {
                if (!this.currentNode.nextNodeId) {
                    throw new Error(
                        "Node with type input must have a nextNodeId"
                    );
                }

                this.currentNode = this.findNodeById(
                    this.currentNode.nextNodeId,
                    config
                );
            }

            if (this.currentNode.actions) {
                this.handleActions(this.currentNode.actions);
            }

            this.setCurrentContent();
            await client.sendText(message.from, this.currentContent);

            this.currentContent = "";
            this.isFirstInteraction = false;
        });
    }

    private handleActions(actions: BotAction[]) {
        for (const action of actions) {
            if (action.type === "setVariable") {
                const value = this.convertToGlobalVariables(action.value);

                this.setGlobalVariable(action.key, value);
            } else if (action.type === "calculate") {
                const x = parseFloat(this.getGlobalVariable(action.key));
                const operation = action.operation;
                const y = parseFloat(
                    this.convertToGlobalVariables(action.value)
                );

                switch (operation) {
                    case "sum": {
                        this.setGlobalVariable(action.key, x + y);
                        break;
                    }
                    case "sub": {
                        this.setGlobalVariable(action.key, x - y);
                        break;
                    }
                    case "mult": {
                        this.setGlobalVariable(action.key, x * y);
                        break;
                    }
                    case "div": {
                        this.setGlobalVariable(action.key, x / y);
                        break;
                    }
                }
            }
        }
    }

    private setGlobalVariable(key: string, value: any) {
        this.globalVariables[key] = value;
    }

    private getGlobalVariable(key: string) {
        return this.globalVariables[key];
    }

    private setCurrentContent() {
        const contentWithVariables = this.convertToGlobalVariables(
            this.currentNode.content
        );

        this.currentContent = contentWithVariables + "\n\n";

        if (this.currentNode.priceList) {
            const priceList = this.currentNode.priceList.map((price) => {
                return `${price.label} - R$ ${price.price.toFixed(2)}`;
            });

            this.currentContent += priceList.join("\n") + "\n\n";
        }

        if (this.currentNode.options) {
            const options = this.currentNode.options.map((option) => {
                return `${option.responseValue} - ${option.label}`;
            });

            this.currentContent += options.join("\n");
        }
    }

    private convertToGlobalVariables(text: string) {
        Object.keys(this.globalVariables).forEach((variableKey) => {
            const variableValue = this.getGlobalVariable(variableKey);

            text = text.replace(variableKey, variableValue);
        });

        return text;
    }
}

const config: BotConfig = {
    startNodeId: "welcome",
    nodes: [
        {
            id: "welcome",
            type: "choice",
            content:
                "👋🍕 Olá *{{username}}* bem vindo a pizzaria do Zé!\n\nNo que podemos te ajudar?",
            options: [
                {
                    responseValue: "1",
                    label: "Cardápio",
                    nextNodeId: "menu",
                },
                {
                    label: "Promoções",
                    nextNodeId: "promotions",
                    responseValue: "2",
                },
                {
                    label: "Falar com atendente",
                    nextNodeId: "contact",
                    responseValue: "3",
                },
            ],
        },
        {
            id: "menu",
            type: "choice",
            content: "🍕 *Este é nosso cardápio*",
            priceList: [
                {
                    label: "Pizza de calabresa",
                    price: 30,
                },
                {
                    label: "Pizza de frango com catupiry",
                    price: 35,
                },
                {
                    label: "Pizza de mussarela",
                    price: 32,
                },
            ],
            options: [
                {
                    responseValue: "1",
                    label: "Fazer pedido",
                    nextNodeId: "pizzaSize",
                },
                {
                    responseValue: "2",
                    label: "Voltar",
                    nextNodeId: "welcome",
                },
            ],
        },
        {
            id: "pizzaSize",
            type: "choice",
            content: "🍕 *Escolha o tamanho da pizza*",
            priceList: [
                {
                    label: "Pequena",
                    price: 20,
                },
                {
                    label: "Média",
                    price: 25,
                },
                {
                    label: "Grande",
                    price: 30,
                },
            ],
            options: [
                {
                    responseValue: "1",
                    label: "Pequena",
                    nextNodeId: "pizzaFlavor1",
                    actions: [
                        {
                            type: "setVariable",
                            key: "%pizzaSize%",
                            value: "Pequena",
                        },
                        {
                            type: "setVariable",
                            key: "%pizzaSizePrice%",
                            value: "20",
                        },
                        {
                            type: "setVariable",
                            key: "%totalPrice%",
                            value: "20",
                        },
                    ],
                },
                {
                    responseValue: "2",
                    label: "Média",
                    nextNodeId: "pizzaFlavor1",
                    actions: [
                        {
                            type: "setVariable",
                            key: "%pizzaSize%",
                            value: "Média",
                        },
                        {
                            type: "setVariable",
                            key: "%pizzaSizePrice%",
                            value: "25",
                        },
                        {
                            type: "setVariable",
                            key: "%totalPrice%",
                            value: "25",
                        },
                    ],
                },
                {
                    responseValue: "3",
                    label: "Grande",
                    nextNodeId: "pizzaFlavor1",
                    actions: [
                        {
                            type: "setVariable",
                            key: "%pizzaSize%",
                            value: "Grande",
                        },
                        {
                            type: "setVariable",
                            key: "%pizzaSizePrice%",
                            value: "30",
                        },
                        {
                            type: "setVariable",
                            key: "%totalPrice%",
                            value: "30",
                        },
                    ],
                },
            ],
        },
        {
            id: "pizzaFlavor1",
            type: "choice",
            content: "🍕 *Escolha o primeiro sabor da pizza*",
            options: [
                {
                    responseValue: "1",
                    nextNodeId: "pizzaFlavor2",
                    label: "Calabresa",
                    actions: [
                        {
                            type: "setVariable",
                            key: "%pizzaFlavor1%",
                            value: "Calabresa",
                        },
                        {
                            type: "setVariable",
                            key: "%pizzaFlavor1Price%",
                            value: "20",
                        },
                        {
                            type: "calculate",
                            operation: "sum",
                            key: "%totalPrice%",
                            value: "20",
                        },
                    ],
                },
                {
                    responseValue: "2",
                    nextNodeId: "pizzaFlavor2",
                    label: "Frango com Catupiry",
                    actions: [
                        {
                            type: "setVariable",
                            key: "%pizzaFlavor1%",
                            value: "Calabresa",
                        },
                        {
                            type: "setVariable",
                            key: "%pizzaFlavor1Price%",
                            value: "34.99",
                        },
                        {
                            type: "calculate",
                            operation: "sum",
                            key: "%totalPrice%",
                            value: "34.99",
                        },
                    ],
                },
                {
                    responseValue: "3",
                    nextNodeId: "pizzaFlavor2",
                    label: "Mussarela ",
                    actions: [
                        {
                            type: "setVariable",
                            key: "%pizzaFlavor1%",
                            value: "Calabresa",
                        },
                        {
                            type: "setVariable",
                            key: "%pizzaFlavor1Price%",
                            value: "20",
                        },
                        {
                            type: "calculate",
                            operation: "sum",
                            key: "%totalPrice%",
                            value: "34.99",
                        },
                    ],
                },
            ],
        },
        {
            id: "pizzaFlavor2",
            type: "choice",
            content:
                "🍕 *Escolha o SEGUNDO sabor da pizza* (Primeiro sabor: *%pizzaFlavor1%*)",
            options: [
                {
                    responseValue: "1",
                    nextNodeId: "additional",
                    label: "Calabresa",
                    actions: [
                        {
                            type: "setVariable",
                            key: "%pizzaFlavor2%",
                            value: "Calabresa",
                        },
                        {
                            type: "setVariable",
                            key: "%pizzaFlavor2Price%",
                            value: "34.99",
                        },
                        {
                            type: "calculate",
                            operation: "sum",
                            key: "%totalPrice%",
                            value: "34.99",
                        },
                    ],
                },
                {
                    responseValue: "2",
                    nextNodeId: "additional",
                    label: "Frango com Catupiry",
                    actions: [
                        {
                            type: "setVariable",
                            key: "%pizzaFlavor2%",
                            value: "Frango com Catupiry",
                        },
                        {
                            type: "setVariable",
                            key: "%pizzaFlavor2Price%",
                            value: "34.99",
                        },
                        {
                            type: "calculate",
                            operation: "sum",
                            key: "%totalPrice%",
                            value: "34.99",
                        },
                    ],
                },
                {
                    responseValue: "3",
                    nextNodeId: "additional",
                    label: "Mussarela ",
                    actions: [
                        {
                            type: "setVariable",
                            key: "%pizzaFlavor2%",
                            value: "Calabresa",
                        },
                        {
                            type: "setVariable",
                            key: "%pizzaFlavor2Price%",
                            value: "34.99",
                        },
                        {
                            type: "calculate",
                            operation: "sum",
                            key: "%totalPrice%",
                            value: "34.99",
                        },
                    ],
                },
            ],
        },
        {
            id: "additional",
            type: "choice",
            content: "🍕 *Deseja adicionar algo a mais?*",
            options: [
                {
                    responseValue: "1",
                    label: "Borda recheada: +R$ 5,00",
                    nextNodeId: "observations",
                    actions: [
                        {
                            type: "setVariable",
                            key: "%withStuffedEdge%",
                            value: "Sim",
                        },
                        {
                            type: "calculate",
                            operation: "sum",
                            key: "%totalPrice%",
                            value: "5",
                        },
                    ],
                },
                {
                    responseValue: "2",
                    label: "Refrigerante: +R$ 10,00",
                    nextNodeId: "observations",
                    actions: [
                        {
                            type: "setVariable",
                            key: "%drink%",
                            value: "Refrigerante",
                        },
                        {
                            type: "calculate",
                            operation: "sum",
                            key: "%totalPrice%",
                            value: "10",
                        },
                    ],
                },
            ],
        },
        {
            id: "observations",
            type: "input",
            content: "🍕 *Deseja adicionar alguma observação?*",
            actions: [
                {
                    type: "setVariable",
                    key: "%observations%",
                    value: "{{userResponse}}",
                },
            ],
            nextNodeId: "finishOrder",
        },
        {
            id: "finishOrder",
            content:
                "🍕 *O pedido vai ser retirado ou delevery?*\n*Nossa localização: Rua, Cidade, 123*",
            type: "choice",
            options: [
                {
                    responseValue: "1",
                    label: "Retirar",
                    nextNodeId: "paymentMethod",
                    actions: [
                        {
                            type: "setVariable",
                            key: "%delivery%",
                            value: "Retirar",
                        },
                    ],
                },
                {
                    responseValue: "2",
                    label: "Delivery (+R$ 5,00)",
                    nextNodeId: "address",
                    actions: [
                        {
                            type: "setVariable",
                            key: "%delivery%",
                            value: "Delivery",
                        },
                        {
                            type: "calculate",
                            operation: "sum",
                            key: "%totalPrice%",
                            value: "5",
                        },
                    ],
                },
            ],
        },
        {
            id: "address",
            content: "🍕 *Qual é o seu endereço com um ponto de referencia?*",
            type: "input",
            nextNodeId: "paymentMethod",
            actions: [
                {
                    type: "setVariable",
                    key: "%address%",
                    value: "{{userResponse}}",
                },
            ],
        },
        {
            id: "paymentMethod",
            content: "🍕 *Qual é a forma de pagamento?*",
            type: "choice",
            options: [
                {
                    label: "PIX",
                    responseValue: "1",
                    nextNodeId: "pixKey",
                    actions: [
                        {
                            type: "setVariable",
                            key: "%paymentMethod%",
                            value: "PIX",
                        },
                    ],
                },
                {
                    label: "Cartão",
                    responseValue: "2",
                    nextNodeId: "confirmOrder",
                    actions: [
                        {
                            type: "setVariable",
                            key: "%paymentMethod%",
                            value: "Cartão",
                        },
                    ],
                },
                {
                    label: "Dinheiro",
                    responseValue: "3",
                    nextNodeId: "needChange",
                    actions: [
                        {
                            type: "setVariable",
                            key: "%paymentMethod%",
                            value: "Dinheiro",
                        },
                    ],
                },
            ],
        },
        {
            id: "needChange",
            type: "input",
            content: "🍕 *Precisa de troco? Quanto?*",
            actions: [
                {
                    type: "setVariable",
                    key: "%needChange%",
                    value: "{{userResponse}}",
                },
            ],
        },
        {
            id: "pixKey",
            content:
                "🍕 *Nossa chave PIX: 123123123122*\nPor favor nos envie o comprovante após o pagamento!",
            type: "input",
            actions: [
                {
                    type: "setVariable",
                    key: "%proofOfPayment%",
                    value: "{{userResponse}}",
                },
            ],
            nextNodeId: "confirmOrder",
        },
        {
            id: "confirmOrder",
            content:
                "🍕 *Confirme seu pedido:*\n\nTamanho: *%pizzaSize%*\nSabor 1: *%pizzaFlavor1%*\nSabor 2: *%pizzaFlavor2%*\nBorda recheada: *%withStuffedEdge%*\nRefrigerante: *%drink%*\nObservações: *%observations%*\n\n*Total: R$ %totalPrice%*",
            type: "choice",
            options: [
                {
                    label: "Confirmar",
                    responseValue: "1",
                    nextNodeId: "finalization",
                },
                {
                    label: "Cancelar",
                    responseValue: "2",
                    nextNodeId: "welcome",
                },
            ],
        },
        {
            id: "finalization",
            content:
                "🍕 *Pedido finalizado! Aguarde um atendente obter seu pedido!*",
            type: "message",
        },
    ],
};

new Bot(config);
