import { Shape } from "../interfaces/shape.interface";
import { Drawing } from "./../drawing/drawing";

export class Circle implements Shape {
    constructor(private radius: number, private drawing: Drawing) {}

    draw(): void {
        console.log(`Drawing a circle with radius ${this.radius}`);
        this.drawing.addShape(this);
    }
}
