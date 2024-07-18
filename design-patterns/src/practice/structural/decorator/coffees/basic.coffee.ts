import { Coffee } from "../interfaces/coffee.interface";

export class BasicCoffee implements Coffee {
    getDescription(): string {
        return "A simple coffee";
    }

    cost(): number {
        return 4.99;
    }
}
