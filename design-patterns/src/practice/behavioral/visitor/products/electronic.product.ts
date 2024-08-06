import { Product } from "../interfaces/product.interface";
import { Visitor } from "../interfaces/visitor.interface";

export class Electronic implements Product {
    price: number;
    warranty: number;
    finalPrice: number;

    constructor(price: number, warranty: number) {
        this.price = price;
        this.warranty = warranty;
        this.finalPrice = 0;
    }

    accept(visitor: Visitor): void {
        visitor.visitElectronic(this);
    }
}
