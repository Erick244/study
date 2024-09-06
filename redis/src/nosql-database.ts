import { createClient, RediSearchSchema, SchemaFieldTypes } from "redis";

(async () => {
    const client = createClient();

    client.on("connect", () => {
        console.log("Connected to Redis");
    });

    await client.connect();

    const schema: RediSearchSchema = {
        "$.name": {
            type: SchemaFieldTypes.TEXT,
            SORTABLE: true,
            AS: "name",
        },
        "$.price": {
            type: SchemaFieldTypes.NUMERIC,
            SORTABLE: true,
            AS: "price",
        },
        "$.quantity": {
            type: SchemaFieldTypes.NUMERIC,
            SORTABLE: true,
            AS: "quantity",
        },
    };

    try {
        await client.ft.create("idx:product", schema, {
            ON: "JSON",
            PREFIX: "product",
        });
    } catch (error: any) {
        if (error.message === "Index already exists") {
            console.log("Index exists already, skipped creation.");
        }
    }

    const products = [
        {
            name: "Mouse",
            price: 12.99,
            quantity: 100,
        },
        {
            name: "Keyboard",
            price: 13.99,
            quantity: 100,
        },
        {
            name: "Monitor",
            price: 10.99,
            quantity: 150,
        },
        {
            name: "Small Monitor",
            price: 10.99,
            quantity: 150,
        },
    ];

    await Promise.all(
        products.map((product, i) =>
            client.json.set(`product:${i}`, "$", product)
        )
    );

    let result = await client.ft.search("idx:product", "*", {
        LIMIT: {
            from: 0,
            size: 2,
        },
    });

    result = await client.ft.search("idx:product", "@name:Monitor", {
        LIMIT: {
            from: 0,
            size: 3,
        },
    });

    result = await client.ft.search("idx:product", '@name:"Small Monitor"', {
        LIMIT: {
            from: 0,
            size: 3,
        },
    });

    console.log(JSON.stringify(result, null, 2));
})();
