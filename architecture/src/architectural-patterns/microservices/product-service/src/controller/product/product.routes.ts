import { Express } from "express";
import { ProductController } from "./product.controller";

export const productRoutes = (app: Express) => {
    const productController = new ProductController();

    app.post("/products", (req, res) => {
        const product = req.body;

        productController.create(product);

        res.status(200).send();
    });

    app.get("/products", (req, res) => {
        const products = productController.findAll();

        res.status(200).json(products);
    });
};
