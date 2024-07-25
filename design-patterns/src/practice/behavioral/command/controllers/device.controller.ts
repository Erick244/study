import { Command } from "../commands/command.interface";

export class DeviceController {
    private command: Command;

    private history: Command[] = [];

    public setCommand(command: Command): void {
        this.command = command;
    }

    public pressButton(): void {
        this.command.execute();
        this.history.push(this.command);
    }

    public undo(): void {
        const latestCommand = this.history.pop();
        latestCommand?.undo();
    }
}
