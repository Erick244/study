import { ArticleDocument } from "../documents/article.document";
import { ReportDocument } from "../documents/report.document";

export class DocumentApplication {
    main(): void {
        const reportDocument = new ReportDocument();
        reportDocument.title = "Report Document Title";
        reportDocument.author = "John Doe";
        reportDocument.pages = 100;

        const reportDocumentClone = reportDocument.clone();
        reportDocumentClone.date = new Date("1999-01-01");
        reportDocumentClone.display();
        console.log("\n");

        const articleDocument = new ArticleDocument();
        articleDocument.title = "Article Document Title";
        articleDocument.impactFactor = 70;
        articleDocument.journal = "Science";

        const articleDocumentClone = new ArticleDocument(articleDocument);
        articleDocumentClone.journal = "Science 2";
        articleDocumentClone.display();
    }
}
