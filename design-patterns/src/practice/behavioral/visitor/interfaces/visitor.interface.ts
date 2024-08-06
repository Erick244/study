import { Electronic } from "../products/electronic.product";
import { Food } from "../products/food.product";

export interface Visitor {
    visitElectronic(electronic: Electronic): void;
    visitFood(food: Food): void;
}
