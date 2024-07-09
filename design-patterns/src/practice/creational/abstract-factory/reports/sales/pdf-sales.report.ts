import { SalesReport } from "./sales.report";

export class PDFSalesReport implements SalesReport {
    generate(): void {
        console.log("Generating PDF report...");
    }
}
