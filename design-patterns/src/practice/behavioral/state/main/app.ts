import { Product } from "../entities/product.entity";
import { VendingState } from "../interface/state.interface";
import { IdleState } from "../states/idle.state";

export class VendingMachine {
    private state: VendingState;
    private credit: number;

    constructor() {
        this.changeState(new IdleState(this));
        this.resetCredits();
    }

    changeState(state: VendingState): void {
        this.state = state;
    }

    resetCredits(): void {
        this.credit = 0;
    }

    insertCoin(amount: number): void {
        try {
            this.state.insertCoin(amount);
        } catch (error) {
            console.log("Invalid operation");
        }
    }

    selectProduct(product: Product): void {
        try {
            this.state.selectProduct(product);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    refund(): void {
        try {
            this.state.refund();
        } catch (error: any) {
            console.log(error.message);
        }
    }

    getCredit(): number {
        return this.credit;
    }

    addCredit(amount: number): void {
        this.credit += amount;
    }

    discountCredit(amount: number): void {
        try {
            if (this.credit >= amount) {
                this.credit -= amount;
            } else {
                throw new Error("Insufficient credit");
            }
        } catch (error) {
            throw error;
        }
    }
}
