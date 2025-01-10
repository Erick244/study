import * as venom from "venom-bot";

async function bootstrap() {
    const client = await venom.create({ session: "aaa" });

    await client.onMessage(async (message) => {
        await client.sendImage(
            message.from,
            "https://imgs.search.brave.com/cVlBkA1wuoetwFmPvFR_t7sVBiQWhTsshodBFb5ViFg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvZm9v/ZC1tZW51LWNoZWVz/ZS1waXp6YS1jb3Zl/ci1iYW5uZXItdGVt/cGxhdGVfMTIwMzI5/LTE0NDEuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA",
            "Banner",
            `👋🍕 Olá *${message.notifyName.toUpperCase()}* bem vindo a pizzaria do Zé!\n\nNo que podemos te ajudar?\n*[ 1 ] - Cardápio 🍕*\n*[ 2 ] - Promoções 📢*\n*[ 3 ] - Falar com atendente 👤*`
        );
    });
}

bootstrap();
