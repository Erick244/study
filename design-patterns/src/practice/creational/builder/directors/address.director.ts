import { AddressBuilder } from "../builders/address.builder";

export class AddressDirector {
    private builder: AddressBuilder;

    constructor(builder: AddressBuilder) {
        this.builder = builder;
    }

    buildDefaultAddress(state: string, zipCode: string): void {
        this.builder.reset();
        this.builder.setState(state);
        this.builder.setZipCode(zipCode);
    }
}
