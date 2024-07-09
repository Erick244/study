import { ReportFactory } from "../factory/report.factory";

export class ReportApp {
    private factory: ReportFactory;

    constructor(factory: ReportFactory) {
        this.factory = factory;
    }

    public getSalesReports() {
        return this.factory.createSalesReport();
    }

    public getInventoryReports() {
        return this.factory.createInventoryReport();
    }
}
