import { InventoryReport } from "../reports/inventory/inventory.report";
import { SalesReport } from "../reports/sales/sales.report";

export interface ReportFactory {
    createSalesReport(): SalesReport;
    createInventoryReport(): InventoryReport;
}
