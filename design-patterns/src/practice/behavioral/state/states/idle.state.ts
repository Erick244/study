import { Product } from "../entities/product.entity";
import { VendingState } from "../interface/state.interface";
import { WaitingState } from "./waiting.state";

export class IdleState extends VendingState {
    insertCoin(amount: number): void {
        this.context.addCredit(amount);
        console.log(`Credit: ${this.context.getCredit()}`);

        this.context.changeState(new WaitingState(this.context));
    }
    selectProduct(product: Product): void {
        throw new Error("Invalid operation.");
    }

    refund(): void {
        throw new Error("Invalid operation.");
    }
}
