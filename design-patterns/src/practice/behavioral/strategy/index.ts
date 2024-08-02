import { SorterStrategy } from "./interfaces/sorter-strategy.interface";
import { Sorter } from "./main/app";
import { BubbleStrategy } from "./strategies/bubble.strategy";
import { MergeStrategy } from "./strategies/merge.strategy";
import { QuickStrategy } from "./strategies/quick.strategy";

const sorter = new Sorter();

const bubbleStrategy = new BubbleStrategy();
console.log(sorter.sort([3, 2, 1], bubbleStrategy));

const quickStrategy = new QuickStrategy();
console.log(sorter.sort([3, 2, 1], quickStrategy));

const mergeStrategy = new MergeStrategy();
console.log(sorter.sort([3, 2, 1], mergeStrategy));

console.log(sorter.sort([3, 2, 1], {} as SorterStrategy)); // Invalid
