import { createClient } from "redis";

(async () => {
    const client = createClient();

    client.on("connect", () => {
        console.log("Connected to Redis");
    });

    await client.connect();

    await client.set("hello", "Hello World!");
    const value = await client.get("hello");

    console.log(value);

    await client.hSet("product", {
        name: "Mouse",
        price: 145.99,
        quantity: 3,
    });

    const product = await client.hGetAll("product");
    console.log(JSON.stringify(product, null, 2));

    const productName = await client.hGet("product", "name");
    console.log(productName);
})();
