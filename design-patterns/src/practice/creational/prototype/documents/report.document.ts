import { Document } from "../models/document.model";

export class ReportDocument extends Document {
    author: string;

    pages: number;

    constructor(source?: ReportDocument) {
        super(source);

        if (source) {
            this.author = source.author;
            this.pages = source.pages;
        }
    }

    clone(): Document {
        return new ReportDocument(this);
    }

    display(): void {
        super.display();
        console.log(`Report Document: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Pages: ${this.pages}`);
    }
}
