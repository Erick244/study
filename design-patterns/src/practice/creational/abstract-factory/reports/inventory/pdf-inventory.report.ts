import { InventoryReport } from "./inventory.report";

export class PDFInventoryReport implements InventoryReport {
    generate(): void {
        console.log("Generating PDF inventory report...");
    }
}
