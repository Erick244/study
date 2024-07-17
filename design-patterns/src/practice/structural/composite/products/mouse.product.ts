import { Product } from "./product";

export class Mouse implements Product {
    private price: number;

    constructor(price: number) {
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }
}
