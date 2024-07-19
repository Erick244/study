import { Item } from "./item";

export class Order {
    private id: number;

    private items: Item[] = [];

    private total: number;

    constructor(id: number) {
        this.id = id;
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public removeItem(item: Item): void {
        this.items = this.items.filter((i) => i !== item);
    }

    public getTotalPrice(): number {
        this.total = this.items.reduce(
            (total, item) => total + item.getTotalPrice(),
            0
        );

        return Number(this.total.toFixed(2));
    }

    public getItems(): Item[] {
        return this.items;
    }

    public getId(): number {
        return this.id;
    }
}
