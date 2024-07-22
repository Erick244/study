import { Positions } from "../types/positions.type";

export class Particle {
    public color: string;

    public size: number;

    constructor(color: string, size: number) {
        this.color = color;
        this.size = size;
    }

    public render(positions: Positions): void {
        console.log(
            `Rendering a new Particle in X:${positions.x} and Y:${positions.y} with a color: ${this.color} and size: ${this.size}`
        );
    }
}
