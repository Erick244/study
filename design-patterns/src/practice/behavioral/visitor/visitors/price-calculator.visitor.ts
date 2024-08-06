import { Visitor } from "../interfaces/visitor.interface";
import { Electronic } from "../products/electronic.product";
import { Food } from "../products/food.product";

export class PriceCalculatorVisitor implements Visitor {
    visitElectronic(electronic: Electronic): void {
        const warrantyIncrease = electronic.warranty * 10;

        electronic.finalPrice = electronic.price + warrantyIncrease;
    }

    visitFood(food: Food): void {
        const today = new Date();
        const timeDiff = food.expiryDate.getTime() - today.getTime();
        const millisecondsInOneDay = 1000 * 3600 * 24;
        const daysToExpiry = Math.ceil(timeDiff / millisecondsInOneDay);

        if (daysToExpiry < 7) {
            food.applyDiscount(50);
        } else {
            food.finalPrice = food.price;
        }
    }
}
