import { CoffeeDecorator } from "./coffee.decorator";

export class MilkDecorator extends CoffeeDecorator {
    getDescription(): string {
        return super.getDescription() + ", with a Milk";
    }

    cost(): number {
        return super.cost() + 5;
    }
}
