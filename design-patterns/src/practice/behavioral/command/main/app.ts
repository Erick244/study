import { DeviceOffCommand } from "../commands/device-off.command";
import { DeviceOnCommand } from "../commands/device-on.command";
import { DeviceController } from "../controllers/device.controller";
import { Fan } from "../device/fan.device";
import { Light } from "../device/light.device";

export class Application {
    private light = new Light();
    private fan = new Fan();
    private controller = new DeviceController();

    public setup(): void {
        const lightOn = new DeviceOnCommand(this.light);
        const lightOff = new DeviceOffCommand(this.light);

        this.controller.setCommand(lightOn);
        this.controller.pressButton();

        this.controller.setCommand(lightOff);
        this.controller.pressButton();

        this.controller.undo();

        const fanOn = new DeviceOnCommand(this.fan);
        const fanOff = new DeviceOffCommand(this.fan);

        this.controller.setCommand(fanOn);
        this.controller.pressButton();

        this.controller.setCommand(fanOff);
        this.controller.pressButton();

        this.controller.undo();
    }
}
