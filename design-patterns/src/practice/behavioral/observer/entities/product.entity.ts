import { ProductManager } from "../managers/product.manager";

export class Product {
    public manager: ProductManager;

    constructor(private price: number) {
        this.manager = new ProductManager(this);
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number) {
        this.price = price;

        this.manager.notify();
    }
}
