import { ExcelReportFactory } from "./factory/excel-report.factory";
import { PDFReportFactory } from "./factory/pdf-report.factory";
import { ReportApp } from "./main/app";

// PDF report product
const PDFReportApp = new ReportApp(new PDFReportFactory());

const PDFSalesReport = PDFReportApp.getSalesReports();
PDFSalesReport.generate();

const PDFInventoryReport = PDFReportApp.getInventoryReports();
PDFInventoryReport.generate();

// Excel report product
const ExcelReportApp = new ReportApp(new ExcelReportFactory());

const ExcelSalesReport = ExcelReportApp.getSalesReports();
ExcelSalesReport.generate();

const ExcelInventoryReport = ExcelReportApp.getInventoryReports();
ExcelInventoryReport.generate();
