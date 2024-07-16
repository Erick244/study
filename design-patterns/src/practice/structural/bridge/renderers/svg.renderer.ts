import { Positions } from "../types/positions.type";
import { Renderer } from "./renderer";

export class SVGRenderer implements Renderer {
    renderCircle(positions: Positions, radius: number): void {
        console.log(
            `Render a SVG circle with radius ${radius} in position ${JSON.stringify(
                positions
            )}`
        );
    }

    renderSquare(positions: Positions, side: number): void {
        console.log(
            `Render a SVG square with side length ${side}px in position ${JSON.stringify(
                positions
            )}`
        );
    }
}
