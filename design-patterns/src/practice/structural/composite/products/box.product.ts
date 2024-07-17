import { Product } from "./product";

export class Box implements Product {
    private products: Product[] = [];

    add(product: Product): void {
        this.products.push(product);
    }

    remove(product: Product): void {
        this.products = this.products.filter((p) => p !== product);
    }

    getPrice(): number {
        return this.products.reduce(
            (total, product) => total + product.getPrice(),
            0
        );
    }
}
