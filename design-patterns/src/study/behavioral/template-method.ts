export abstract class GameAI {
    // Template Method
    turn() {
        this.collectResources();
        this.buildStructures();
        this.buildUnits();
        this.attack();
    }

    collectResources(): void {
        // Base Implementation...
    }

    abstract buildStructures(): void;
    abstract buildUnits(): void;

    attack(): void {
        console.log("Attacking!");
        // Base Implementation...
    }

    abstract sendScouts(positions: any): void;
    abstract sendWarriors(positions: any): void;
}

export class OrcsAI extends GameAI {
    buildStructures(): void {
        // Implementation...
    }

    buildUnits(): void {
        // Implementation...
    }

    sendScouts(positions: any): void {
        // Implementation...
    }

    sendWarriors(positions: any): void {
        // Implementation...
    }
}

export class MonsterAI extends GameAI {
    collectResources(): void {
        // Implementation...
    }

    buildStructures(): void {
        // Implementation...
    }

    buildUnits(): void {
        // Implementation...
    }

    sendScouts(positions: any): void {
        // Implementation...
    }

    sendWarriors(positions: any): void {
        // Implementation...
    }
}
