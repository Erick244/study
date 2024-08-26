import { User } from "./user.entity";

export class Product {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly user: User
    ) {}
}
