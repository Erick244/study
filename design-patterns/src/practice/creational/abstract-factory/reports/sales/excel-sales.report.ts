import { SalesReport } from "./sales.report";

export class ExcelSalesReport implements SalesReport {
    generate(): void {
        console.log("Generating Excel report...");
    }
}
