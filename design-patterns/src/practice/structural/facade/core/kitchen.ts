import { Order } from "./order";

export class Kitchen {
    private order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    public prepare(): void {
        console.log(`Order ${this.order.getId()} is being prepared.`);

        this.order.getItems().forEach((item) => {
            console.log(`Preparing the ${item.getName()}...`);
        });
    }
}
