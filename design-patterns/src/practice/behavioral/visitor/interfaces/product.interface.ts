import { Visitor } from "./visitor.interface";

export interface Product {
    accept(visitor: Visitor): void;
}
