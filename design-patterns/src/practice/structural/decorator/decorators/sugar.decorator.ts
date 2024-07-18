import { CoffeeDecorator } from "./coffee.decorator";

export class SugarDecorator extends CoffeeDecorator {
    getDescription(): string {
        return super.getDescription() + ", with a Sugar";
    }

    cost(): number {
        return super.cost() + 1.99;
    }
}
