import { Shape } from "../interfaces/shape.interface";
import { Drawing } from "./drawing";

export class DrawingSnapshot {
    private shapes: Shape[];

    constructor(private drawing: Drawing, shapes: Shape[]) {
        this.shapes = [...shapes];
    }

    public restore(): void {
        this.drawing.setShapes(this.shapes);
    }
}
