import { Device } from "../device/device.interface";
import { Command } from "./command.interface";

export class DeviceOffCommand implements Command {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    execute(): void {
        this.device.off();
    }

    undo(): void {
        this.device.on();
    }
}
