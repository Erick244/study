export interface Iterator<R> {
    next(): R;
    hasNext(): boolean;
}
