export class Product {
    constructor(protected name: string, protected price: number) {}

    getPrice(): number {
        return this.price;
    }

    getName(): string {
        return this.name;
    }
}
