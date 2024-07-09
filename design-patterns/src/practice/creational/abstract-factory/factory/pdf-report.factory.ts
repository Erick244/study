import { InventoryReport } from "../reports/inventory/inventory.report";
import { PDFInventoryReport } from "../reports/inventory/pdf-inventory.report";
import { PDFSalesReport } from "../reports/sales/pdf-sales.report";
import { SalesReport } from "../reports/sales/sales.report";
import { ReportFactory } from "./report.factory";

export class PDFReportFactory implements ReportFactory {
    createSalesReport(): SalesReport {
        return new PDFSalesReport();
    }
    createInventoryReport(): InventoryReport {
        return new PDFInventoryReport();
    }
}
