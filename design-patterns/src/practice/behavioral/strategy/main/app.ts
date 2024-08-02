import { SorterStrategy } from "../interfaces/sorter-strategy.interface";

export class Sorter {
    sort(numbers: number[], strategy: SorterStrategy): number[] {
        try {
            return strategy.sort(numbers);
        } catch (error) {
            throw new Error("Invalid sorting algorithm");
        }
    }
}
