import { Product } from "../entities/product.entity";
import { User } from "../entities/user.entity";

export class ProductService {
    private products: Product[] = [];

    public async create(product: Product): Promise<void> {
        await this.persistUser(product.user);

        this.products.push(product);
    }

    // Microservice communication
    private async persistUser(user: User): Promise<void> {
        await fetch("http://localhost:8080/users", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    public findAll(): Product[] {
        return this.products;
    }
}
