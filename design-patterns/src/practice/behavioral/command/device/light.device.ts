import { Device } from "./device.interface";

export class Light implements Device {
    on(): void {
        console.log("Turning on LIGHT");
    }

    off(): void {
        console.log("Turning off LIGHT");
    }
}
