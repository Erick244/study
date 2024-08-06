import { Product } from "../interfaces/product.interface";
import { Visitor } from "../interfaces/visitor.interface";

export class Food implements Product {
    price: number;
    expiryDate: Date;
    finalPrice: number = 0;

    constructor(price: number, expiryDate: Date) {
        this.price = price;
        this.expiryDate = expiryDate;
    }

    applyDiscount(discountPercent: number): void {
        this.finalPrice = this.price * (discountPercent / 100);
    }

    accept(visitor: Visitor): void {
        visitor.visitFood(this);
    }
}
