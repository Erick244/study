// Originator
export class Editor {
    private text: string;
    private cursorPositions: { x: number; y: number } = { x: 0, y: 0 };
    private selectionWidth: number;

    public setText(text: string): void {
        this.text = text;
    }

    public setCursorPositions(x: number, y: number): void {
        this.cursorPositions = { x, y };
    }

    public setSelectionWidth(width: number): void {
        this.selectionWidth = width;
    }

    public createSnapshot(): Snapshot {
        return new Snapshot(
            this,
            this.cursorPositions,
            this.selectionWidth,
            this.text
        );
    }

    public showState(): void {
        console.log(`Text: ${this.text}`);
        console.log(
            `Cursor Positions: (${this.cursorPositions.x}, ${this.cursorPositions.y})`
        );
        console.log(`Selection Width: ${this.selectionWidth}`);
    }
}

// Memento
export class Snapshot {
    constructor(
        private editor: Editor,
        private cursorPositions: { x: number; y: number },
        private selectionWidth: number,
        private text: string
    ) {}

    public restore(): void {
        this.editor.setText(this.text);
        this.editor.setCursorPositions(
            this.cursorPositions.x,
            this.cursorPositions.y
        );
        this.editor.setSelectionWidth(this.selectionWidth);
    }
}

// Caretaker
export class Command {
    private backup: Snapshot;

    constructor(private editor: Editor) {}

    public makeBackup(): void {
        this.backup = this.editor.createSnapshot();
    }

    public undo(): void {
        if (this.backup) {
            this.backup.restore();
        }
    }
}

const editor = new Editor();
editor.setCursorPositions(10, 10);
editor.setSelectionWidth(1000);
editor.setText("TEST");

const command = new Command(editor);
command.makeBackup();

editor.setText("NEW TEST");
command.undo();

editor.showState();
