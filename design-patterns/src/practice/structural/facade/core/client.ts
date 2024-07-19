export class Client {
    private name: string;
    private address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

    public getName(): string {
        return this.name;
    }

    public getAddress(): string {
        return this.address;
    }
}
