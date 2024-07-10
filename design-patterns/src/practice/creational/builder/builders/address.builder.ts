import { Address } from "../products/address.product";

export class AddressBuilder {
    private address: Address;

    reset(): void {
        this.address = new Address();
    }

    setStreet(street: string): void {
        this.address.street = street;
    }

    setCity(city: string): void {
        this.address.city = city;
    }

    setState(state: string): void {
        this.address.state = state;
    }

    setZipCode(zipCode: string): void {
        this.address.zipCode = zipCode;
    }

    build(): Address {
        return this.address;
    }
}
