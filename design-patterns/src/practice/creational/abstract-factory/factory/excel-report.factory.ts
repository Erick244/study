import { ExcelInventoryReport } from "../reports/inventory/excel-inventory.report";
import { InventoryReport } from "../reports/inventory/inventory.report";
import { ExcelSalesReport } from "../reports/sales/excel-sales.report";
import { SalesReport } from "../reports/sales/sales.report";
import { ReportFactory } from "./report.factory";

export class ExcelReportFactory implements ReportFactory {
    createSalesReport(): SalesReport {
        return new ExcelSalesReport();
    }
    createInventoryReport(): InventoryReport {
        return new ExcelInventoryReport();
    }
}
