import { MilkDecorator } from "../decorators/milk.decorator";
import { SugarDecorator } from "../decorators/sugar.decorator";
import { VanillaDecorator } from "../decorators/vanilla.decorator";
import { Coffee } from "../interfaces/coffee.interface";
import { BasicCoffee } from "./../coffees/basic.coffee";

export class CoffeeShop {
    private coffee: Coffee;

    constructor() {
        this.coffee = new BasicCoffee();
    }

    addSugar(): CoffeeShop {
        this.coffee = new SugarDecorator(this.coffee);

        return this;
    }

    addMilk(): CoffeeShop {
        this.coffee = new MilkDecorator(this.coffee);

        return this;
    }

    addVanilla(): CoffeeShop {
        this.coffee = new VanillaDecorator(this.coffee);

        return this;
    }

    getMyCoffee(): void {
        console.log(this.coffee.getDescription() + " - $" + this.coffee.cost());
    }
}
