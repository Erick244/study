import { Renderer } from "../renderers/renderer";
import { Positions } from "../types/positions.type";
import { Shape } from "./shape";

export class Square extends Shape {
    private side: number;

    private positions: Positions;

    constructor(positions: Positions, side: number, renderer: Renderer) {
        super(renderer);
        this.side = side;
        this.positions = positions;
    }

    draw(): void {
        this.renderer.renderSquare(this.positions, this.side);
    }
}
