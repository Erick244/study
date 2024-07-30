import { Shape } from "../interfaces/shape.interface";
import { DrawingSnapshot } from "./drawing.snapshot";

export class Drawing {
    private shapes: Shape[] = [];

    public addShape(shape: Shape): void {
        this.shapes.push(shape);
    }

    public setShapes(shapes: Shape[]): void {
        this.shapes = shapes;
    }

    public removeShape(shape: Shape): void {
        this.shapes = this.shapes.filter((s) => s !== shape);
    }

    public save(): DrawingSnapshot {
        return new DrawingSnapshot(this, this.shapes);
    }

    public show(): void {
        console.log(this.shapes);
    }
}
