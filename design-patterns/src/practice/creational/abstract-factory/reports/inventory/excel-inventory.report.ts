import { InventoryReport } from "./inventory.report";

export class ExcelInventoryReport implements InventoryReport {
    generate(): void {
        console.log("Generating Excel inventory report...");
    }
}
