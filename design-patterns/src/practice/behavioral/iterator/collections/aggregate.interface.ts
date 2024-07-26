import { Iterator } from "../iterators/iterator.interface";

export interface Aggregate<T> {
    createIterator(): Iterator<T>;
}
