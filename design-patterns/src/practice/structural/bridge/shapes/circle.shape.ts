import { Positions } from "../types/positions.type";
import { Renderer } from "./../renderers/renderer";
import { Shape } from "./shape";

export class Circle extends Shape {
    private radius: number;

    private positions: Positions;

    constructor(positions: Positions, radius: number, renderer: Renderer) {
        super(renderer);
        this.radius = radius;
        this.positions = positions;
    }

    draw(): void {
        this.renderer.renderCircle(this.positions, this.radius);
    }
}
