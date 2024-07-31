import { Product } from "../entities/product.entity";
import { User } from "../entities/user.entity";

export class ShopApp {
    main() {
        const user1 = new User();
        const user2 = new User();

        const product = new Product(1.99);
        product.manager.subscribe(user1);
        product.manager.subscribe(user2);

        product.manager.unsubscribe(user1);

        product.setPrice(2.99);
    }
}
