import { Product } from "../entities/product.entity";
import { VendingState } from "../interface/state.interface";
import { IdleState } from "./idle.state";

export class WaitingState extends VendingState {
    insertCoin(amount: number): void {
        this.context.addCredit(amount);
        console.log(`Credit: ${this.context.getCredit()}`);
    }

    selectProduct(product: Product): void {
        this.context.discountCredit(product.getPrice());
        console.log(`Dispending ${product.getName()}`);
    }

    refund(): void {
        console.log(`Refunding: ${this.context.getCredit()}`);
        this.context.changeState(new IdleState(this.context));
        this.context.resetCredits();
    }
}
