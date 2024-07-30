import { Drawing } from "../drawing/drawing";
import { DrawingHistory } from "../drawing/drawing.history";
import { Circle } from "../shapes/circle.shape";
import { Square } from "../shapes/square.shape";

export class DrawingApplication {
    main() {
        const drawing = new Drawing();

        const bkp = new DrawingHistory(drawing);

        const circle = new Circle(10, drawing);
        circle.draw();

        bkp.saveState();

        const square = new Square(100, drawing);
        square.draw();

        bkp.undo();
        drawing.show();
    }
}
