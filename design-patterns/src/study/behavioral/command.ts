// Command abstraction
export abstract class Command {
    protected app: Application;

    protected editor: Editor;

    protected backup: string;

    constructor(app: Application, editor: Editor) {
        this.app = app;
        this.editor = editor;
    }

    public saveBackup(): void {
        this.backup = this.editor.text;
    }

    public undo(): void {
        this.editor.text = this.backup;
    }

    public abstract execute(): boolean;
}

// Concrete Commands
export class CopyCommand extends Command {
    // Not Edit State
    public execute(): boolean {
        this.app.clipboard = this.editor.getSelection();

        return false;
    }
}

export class CutCommand extends Command {
    // Edit State
    public execute(): boolean {
        this.saveBackup();

        this.app.clipboard = this.editor.getSelection();
        this.editor.deleteSelection();

        return true;
    }
}

export class PasteCommand extends Command {
    public execute(): boolean {
        this.saveBackup();
        this.editor.replaceSelection(this.app.clipboard);

        return true;
    }
}

export class UndoCommand extends Command {
    public execute(): boolean {
        this.app.undo();

        return false;
    }
}

// Receiver
export class Editor {
    public text: string;

    public getSelection(): any {
        // Implementation for getting selection
    }

    public deleteSelection(): void {
        // Implementation for deleting selection
    }

    public replaceSelection(text: string): void {
        // Implementation for replacing selection with given text
    }
}

// Client Code
export class Button {
    public onClick(callBack: () => void): void {
        callBack();
    }
}

export class ShortCuts {
    public onPressKey(key: string, callBack: () => void): void {
        // Implementation
    }
}

export class Application {
    public clipboard: string;

    public editors: Editor[];

    public activeEditor: Editor;

    public history: Command[];

    public createUI(): void {
        // Copy
        const copyCommand = () =>
            this.executeCommand(new CopyCommand(this, this.activeEditor));

        const copyButton = new Button();
        copyButton.onClick(copyCommand);

        const copyShortcuts = new ShortCuts();
        copyShortcuts.onPressKey("Ctrl+C", copyCommand);

        // Paste
        const pasteCommand = () =>
            this.executeCommand(new PasteCommand(this, this.activeEditor));

        const pasteButton = new Button();
        pasteButton.onClick(pasteCommand);

        const pasteShortcuts = new ShortCuts();
        pasteShortcuts.onPressKey("Ctrl+V", pasteCommand);

        // Others commands...
    }

    public executeCommand(command: Command): void {
        if (command.execute()) {
            this.history.push(command);
        }
    }

    public undo(): void {
        const command = this.history.pop();

        if (command) {
            command.undo();
        }
    }
}
