import { SorterStrategy } from "../interfaces/sorter-strategy.interface";

export class MergeStrategy implements SorterStrategy {
    sort(numbers: number[]): number[] {
        if (numbers.length <= 1) {
            return numbers;
        }
        const middleIndex = Math.floor(numbers.length / 2);

        const leftArr = numbers.slice(0, middleIndex);
        const rightArr = numbers.slice(middleIndex);

        return this.merge(this.sort(leftArr), this.sort(rightArr));
    }

    private merge(left: number[], right: number[]): number[] {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            const currentLeftNumber = left[leftIndex];
            const currentRightNumber = right[rightIndex];

            if (currentLeftNumber < currentRightNumber) {
                result.push(currentLeftNumber);
                leftIndex++;
            } else {
                result.push(currentRightNumber);
                rightIndex++;
            }
        }

        return result
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
    }
}
