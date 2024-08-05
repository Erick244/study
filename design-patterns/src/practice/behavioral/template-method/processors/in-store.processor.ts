import { OrderProcessor } from "../main/app";

export class InStoreProcessor extends OrderProcessor {
    validating(): void {
        console.log("Validating in-store order...");
    }

    processing(): void {
        console.log("Processing payment...");
    }

    handingDelivery(): void {
        console.log("Handing over to customer...");
    }
}
