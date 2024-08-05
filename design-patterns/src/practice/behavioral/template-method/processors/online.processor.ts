import { OrderProcessor } from "../main/app";

export class OnlineProcessor extends OrderProcessor {
    validating(): void {
        console.log("Validating online order...");
    }

    processing(): void {
        console.log("Processing payment...");
    }

    handingDelivery(): void {
        console.log("Shipping order...");
    }
}
