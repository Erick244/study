// Abstract Strategy
export interface Strategy {
    execute(a: number, b: number): number;
}

// Concrete Strategies
export class AddStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}

export class SubtractStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a - b;
    }
}

export class MultiplyStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a * b;
    }
}

// Context
export class MathContext {
    constructor(private strategy: Strategy) {}

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    performOperation(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}

// Client Code
const addStrategy = new AddStrategy();

const context = new MathContext(addStrategy);
console.log(context.performOperation(1, 2)); // 3

context.setStrategy(new SubtractStrategy());
console.log(context.performOperation(1, 2)); // -1

context.setStrategy(new MultiplyStrategy());
console.log(context.performOperation(1, 2)); // 2
