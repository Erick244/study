import { Client } from "./client";
import { Order } from "./order";
export class Delivery {
    private order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    public deliver(client: Client): void {
        console.log(`Delivering order to customer ${client.getName()}\n`);
        console.log(`Order Number: ${this.order.getId()}\n`);
        console.log(`Address: ${client.getAddress()}\n`);
        console.log(
            `Items:\n${this.order
                .getItems()
                .map((item) => `${item.getName()} - $${item.getTotalPrice()}`)
                .join("\n")}`
        );
        console.log(`Total: $${this.order.getTotalPrice()}`);
    }
}
