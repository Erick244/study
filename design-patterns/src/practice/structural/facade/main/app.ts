import { Client } from "../core/client";
import { OrderFacade } from "../facade/order.facade";

export class Restaurant {
    main(): void {
        const client = new Client("John Doe", "Street Address, 123");
        const order = new OrderFacade(123);

        order.addSpaghetti().addBarbecue().placeOrder(client);
    }
}
