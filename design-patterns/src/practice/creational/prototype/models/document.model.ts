export abstract class Document {
    title: string;

    content: string;

    date: Date;

    constructor(source?: Document) {
        if (source) {
            this.title = source.title;
            this.content = source.content;
            this.date = source.date;
        }

        this.date = new Date();
    }

    abstract clone(): Document;

    display(): void {
        console.log(`Title: ${this.title}`);
        console.log(`Content: ${this.content}`);
        console.log(`Date: ${this.date.toISOString()}`);
    }
}
