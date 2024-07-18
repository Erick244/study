import { Coffee } from "../interfaces/coffee.interface";

export class CoffeeDecorator implements Coffee {
    private coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    getDescription(): string {
        return this.coffee.getDescription();
    }

    cost(): number {
        return this.coffee.cost();
    }
}
