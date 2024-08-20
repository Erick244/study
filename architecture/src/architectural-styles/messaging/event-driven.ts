export interface OrderPlacedEvent {
    orderId: string;
    customerName: string;
    items: { name: string; quantity: number }[];
}

export type OrderEventCallback = (event: OrderPlacedEvent) => void;

export class OrderManager {
    private eventListeners: OrderEventCallback[] = [];

    placeOrder(event: OrderPlacedEvent) {
        console.log(`Order placed: ${event.orderId}`);

        this.publishEvent(event);
    }

    private publishEvent(event: OrderPlacedEvent): void {
        this.eventListeners.forEach((listener) => listener(event));
    }

    subscribe(callback: OrderEventCallback): void {
        this.eventListeners.push(callback);
    }
}

export class EmailService {
    private orderManager: OrderManager;

    constructor(orderManager: OrderManager) {
        this.orderManager = orderManager;
        this.orderManager.subscribe(this.onOrderPlaced.bind(this));
    }

    onOrderPlaced(event: OrderPlacedEvent): void {
        console.log(
            `Email sent to ${event.customerName} for order ${event.orderId}`
        );
    }
}

const orderManager = new OrderManager();
const emailService = new EmailService(orderManager);

const order: OrderPlacedEvent = {
    orderId: "123",
    customerName: "John Doe",
    items: [
        { name: "Product A", quantity: 2 },
        { name: "Product B", quantity: 1 },
    ],
};

orderManager.placeOrder(order);
