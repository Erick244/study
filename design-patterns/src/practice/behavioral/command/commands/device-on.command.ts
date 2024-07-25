import { Device } from "../device/device.interface";
import { Command } from "./command.interface";

export class DeviceOnCommand implements Command {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    execute(): void {
        this.device.on();
    }

    undo(): void {
        this.device.off();
    }
}
