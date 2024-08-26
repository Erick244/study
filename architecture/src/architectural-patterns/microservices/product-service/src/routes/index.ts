import { Express } from "express";
import { productRoutes } from "../controller/product/product.routes";

export const setupRoutes = (app: Express) => {
    productRoutes(app);
};
