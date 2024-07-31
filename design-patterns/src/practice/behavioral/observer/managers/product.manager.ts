import { Product } from "../entities/product.entity";
import { Observer } from "../interfaces/observer.interface";
import { Subject } from "../interfaces/subject.interface";

export class ProductManager implements Subject<Product> {
    private observers: Observer<Product>[] = [];

    constructor(private product: Product) {}

    subscribe(observer: Observer<Product>): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer<Product>): void {
        this.observers = this.observers.filter((o) => o !== observer);
    }

    notify(): void {
        this.observers.forEach((observer) => observer.update(this.product));
    }
}
