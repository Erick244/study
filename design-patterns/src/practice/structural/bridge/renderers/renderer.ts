import { Positions } from "../types/positions.type";

export interface Renderer {
    renderCircle(positions: Positions, radius: number): void;
    renderSquare(positions: Positions, side: number): void;
}
