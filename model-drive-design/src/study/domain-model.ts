// value Object
export class Money {
    constructor(private amount: number, private currency: string) {}

    add(other: Money): Money {
        if (this.currency !== other.currency) {
            throw new Error("Cannot add different currencies");
        }

        return new Money(this.amount + other.amount, this.currency);
    }

    equals(other: Money): boolean {
        return this.amount === other.amount && this.currency === other.currency;
    }

    getAmount(): number {
        return this.amount;
    }

    getCurrency(): string {
        return this.currency;
    }
}

// Entities
export class Product {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly price: Money
    ) {}
}

export class OrderItem {
    constructor(readonly product: Product, public quantity: number) {}

    total(): Money {
        const totalAmount = this.product.price.getAmount() * this.quantity;

        return new Money(totalAmount, this.product.price.getCurrency());
    }
}

// Aggregate
export class Order {
    private items: OrderItem[] = [];

    constructor(readonly id: string) {}

    addItem(product: Product, quantity: number): void {
        const item = this.items.find((item) => item.product.id === product.id);

        if (item) {
            this.addQuantity(item, quantity);
        } else {
            this.items.push(new OrderItem(product, quantity));
        }
    }

    addQuantity(item: OrderItem, quantity: number): void {
        item.quantity += quantity;
    }

    total(): Money {
        return this.items
            .map((item) => item.total())
            .reduce(
                (total, itemTotal) => total.add(itemTotal),
                new Money(0, "USD")
            );
    }
}

// Repository
export class OrderRepository {
    private orders: Map<string, Order> = new Map();

    save(order: Order): void {
        this.orders.set(order.id, order);
    }

    findById(id: string): Order | undefined {
        return this.orders.get(id);
    }
}

// Client Code
const product1 = new Product("p1", "Laptop", new Money(1000, "USD"));
const product2 = new Product("p2", "Mouse", new Money(50, "USD"));

const order = new Order("o1");
order.addItem(product1, 1);
order.addItem(product2, 2);

const repo = new OrderRepository();
repo.save(order);

console.log(
    `Total do pedido: ${order.total().getAmount()} ${order
        .total()
        .getCurrency()}`
);
