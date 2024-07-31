import { Observer } from "../interfaces/observer.interface";
import { Product } from "./product.entity";

export class User implements Observer<Product> {
    update(product: Product): void {
        console.log(`New product price: ${product.getPrice()}`);
    }
}
