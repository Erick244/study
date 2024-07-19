import { Client } from "../core/client";
import { Delivery } from "../core/delivery";
import { Item } from "../core/item";
import { Kitchen } from "../core/kitchen";
import { Order } from "../core/order";

export class OrderFacade {
    private order: Order;

    private kitchen: Kitchen;

    private delivery: Delivery;

    constructor(orderId: number) {
        this.order = new Order(orderId);
        this.kitchen = new Kitchen(this.order);
        this.delivery = new Delivery(this.order);
    }

    addSpaghetti(quantity = 1): OrderFacade {
        this.order.addItem(new Item("Spaghetti", 19.99, quantity));

        return this;
    }

    addBarbecue(quantity = 1): OrderFacade {
        this.order.addItem(new Item("Barbecue", 39.99, quantity));

        return this;
    }

    addPie(quantity = 1): OrderFacade {
        this.order.addItem(new Item("Pie", 15.99, quantity));

        return this;
    }

    public placeOrder(client: Client) {
        this.kitchen.prepare();
        this.delivery.deliver(client);
    }
}
