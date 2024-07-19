export class Item {
    private name: string;

    private price: number;

    private quantity: number;

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public getTotalPrice(): number {
        return this.price * this.quantity;
    }

    public getName(): string {
        return this.name;
    }
}
