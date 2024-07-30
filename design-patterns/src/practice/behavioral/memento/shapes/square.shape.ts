import { Drawing } from "../drawing/drawing";
import { Shape } from "../interfaces/shape.interface";

export class Square implements Shape {
    constructor(private size: number, private drawing: Drawing) {}

    draw(): void {
        console.log(`Drawing a square with size ${this.size}`);
        this.drawing.addShape(this);
    }
}
