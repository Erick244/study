import { Device } from "./device.interface";

export class Fan implements Device {
    on(): void {
        console.log("Turning on FAN");
    }
    off(): void {
        console.log("Turning off FAN");
    }
}
