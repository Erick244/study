import { Electronic } from "./products/electronic.product";
import { Food } from "./products/food.product";
import { PriceCalculatorVisitor } from "./visitors/price-calculator.visitor";

const visitor = new PriceCalculatorVisitor();

const electronic = new Electronic(1000, 2);
electronic.accept(visitor);
console.log(`Preço do eletrônico: ${electronic.finalPrice}`);

const food = new Food(50, new Date("2024-08-10"));
food.accept(visitor);
console.log(`Preço do alimento: ${food.finalPrice}`);
