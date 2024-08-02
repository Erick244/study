import { SorterStrategy } from "../interfaces/sorter-strategy.interface";

export class BubbleStrategy implements SorterStrategy {
    sort(numbers: number[]): number[] {
        let numbersIndexLength = numbers.length - 1;

        for (let i = 0; i < numbersIndexLength; i++) {
            for (let j = 0; j < numbersIndexLength - i; j++) {
                const nextNumber = numbers[j + 1];
                const currentNumber = numbers[j];

                if (currentNumber > nextNumber) {
                    [numbers[j], numbers[j + 1]] = [nextNumber, currentNumber];
                }
            }
        }

        return numbers;
    }
}
