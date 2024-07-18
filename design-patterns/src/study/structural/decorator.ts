// Abstract Component
export interface DataSource {
    writeData(data: any): void;
    readData(): any;
}

// Concrete Component
export class FileDataSource implements DataSource {
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    writeData(data: any): void {
        // Write the data in file.
    }

    readData(): any {
        // Read data from file.
    }
}

// Base Decorator
export class DataSourceDecorator implements DataSource {
    protected wrappee: DataSource;

    constructor(wrappee: DataSource) {
        this.wrappee = wrappee;
    }

    writeData(data: any): void {
        this.wrappee.writeData(data);
    }

    readData(): any {
        return this.wrappee.readData();
    }
}

// Concrete Decorators
export class EncryptionDecorator extends DataSourceDecorator {
    writeData(data: any): void {
        // 1. Encrypt the data.
        // 2. super.writeData(encryptedData);
    }

    readData(): any {
        // 1. super.readData();
        // 2. Decrypt the data.
        // 3. Return the data.
    }
}

export class CompressionDecorator extends DataSourceDecorator {
    writeData(data: any): void {
        // 1. Compress the data.
        // 2. super.writeData(compressedData);
    }

    readData(): any {
        // 1. super.readData();
        // 2. Decompress the data.
        // 3. Return the data.
    }
}

// Client Code Exemple 1
export class Application {
    private source: DataSource;

    main() {
        // Simple format
        this.source = new FileDataSource("test.txt");
        this.source.writeData("data...");

        // Compress format
        this.source = new CompressionDecorator(this.source);
        this.source.writeData("data...");

        // Encrypt and Compression format
        this.source = new EncryptionDecorator(this.source);
        this.source.writeData("data...");
    }
}

const app = new Application();
app.main();
