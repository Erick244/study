export abstract class OrderProcessor {
    processOrder(): void {
        this.validating();
        this.processing();
        this.handingDelivery();
    }

    abstract validating(): void;
    abstract processing(): void;
    abstract handingDelivery(): void;
}
