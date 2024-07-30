import { Drawing } from "./drawing";
import { DrawingSnapshot } from "./drawing.snapshot";

export class DrawingHistory {
    private history: DrawingSnapshot[] = [];

    constructor(private drawing: Drawing) {}

    public saveState(): void {
        const snapshot = this.drawing.save();
        this.history.push(snapshot);
    }

    public undo(): void {
        const snapshot = this.history.pop();

        if (snapshot) {
            snapshot.restore();
        }
    }
}
