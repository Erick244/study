import { Document } from "../models/document.model";

export class ArticleDocument extends Document {
    journal: string;

    impactFactor: number;

    constructor(source?: ArticleDocument) {
        super(source);

        if (source) {
            this.journal = source.journal;
            this.impactFactor = source.impactFactor;
        }
    }

    clone(): Document {
        return new ArticleDocument(this);
    }

    display(): void {
        super.display();
        console.log(`Journal: ${this.journal}`);
        console.log(`Impact Factor: ${this.impactFactor}`);
    }
}
