import { Shape } from "../shapes/shape";

export class DrawingApplication {
    private shapes: Shape[] = [];

    addShape(shape: Shape): void {
        this.shapes.push(shape);
    }

    renderShapes(): void {
        this.shapes.forEach((shape: Shape) => shape.draw());
    }
}
