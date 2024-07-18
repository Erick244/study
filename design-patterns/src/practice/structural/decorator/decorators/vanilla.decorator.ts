import { CoffeeDecorator } from "./coffee.decorator";

export class VanillaDecorator extends CoffeeDecorator {
    getDescription(): string {
        return super.getDescription() + ", with a Vanilla";
    }

    cost(): number {
        return super.cost() + 10;
    }
}
