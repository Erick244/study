import { Product } from "../entities/product.entity";
import { VendingMachine } from "../main/app";

export abstract class VendingState {
    constructor(protected context: VendingMachine) {}

    abstract insertCoin(amount: number): void;
    abstract selectProduct(product: Product): void;
    abstract refund(): void;
}
