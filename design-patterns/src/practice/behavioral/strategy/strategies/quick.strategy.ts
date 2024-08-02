import { SorterStrategy } from "../interfaces/sorter-strategy.interface";

export class QuickStrategy implements SorterStrategy {
    sort(numbers: number[]): number[] {
        if (numbers.length <= 1) {
            return numbers;
        }

        const pivotIndex = Math.floor(numbers.length / 2);
        const pivot = numbers[pivotIndex];

        const left = numbers.filter((n) => n < pivot);
        const right = numbers.filter((n) => n > pivot);

        return [...this.sort(left), pivot, ...this.sort(right)];
    }
}
