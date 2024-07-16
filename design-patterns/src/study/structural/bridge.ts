// Abstract Implementation
interface Device {
    isEnabled(): boolean;
    enabled(): void;
    disabled(): void;
    getVolume(): number;
    setVolume(percent: number): void;
    getChannel(): number;
    setChannel(channel: number): void;
}

// Concrete Implementations
class Tv implements Device {
    private powerState: boolean;

    private volume: number;

    private channel: number;

    isEnabled(): boolean {
        return this.powerState;
    }

    enabled(): void {
        this.powerState = true;
        console.log("TV is enabled");
    }

    disabled(): void {
        this.powerState = false;
        console.log("TV is disabled");
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(percent: number): void {
        this.volume = percent;
    }

    getChannel(): number {
        return this.channel;
    }

    setChannel(channel: number): void {
        this.channel = channel;
    }
}

class Radio implements Device {
    private powerState: boolean;

    private volume: number;

    private channel: number;

    isEnabled(): boolean {
        return this.powerState;
    }

    enabled(): void {
        this.powerState = true;
        console.log("RADIO is enabled");
    }

    disabled(): void {
        this.powerState = false;
        console.log("RADIO is disabled");
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(percent: number): void {
        this.volume = percent;
    }

    getChannel(): number {
        return this.channel;
    }

    setChannel(channel: number): void {
        this.channel = channel;
    }
}

// Abstraction
class RemoteControl {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    togglePower() {
        if (this.device.isEnabled()) {
            this.device.disabled();
        } else {
            this.device.enabled();
        }
    }

    volumeUp() {
        this.device.setVolume(this.device.getVolume() + 10);
    }

    volumeDown() {
        this.device.setVolume(this.device.getVolume() - 10);
    }

    channelUp() {
        this.device.setChannel(this.device.getChannel() + 1);
    }

    channelDown() {
        this.device.setChannel(this.device.getChannel() - 1);
    }
}

// Abstraction refined
class AdvancedRemoteControl extends RemoteControl {
    mute() {
        this.device.setVolume(0);
    }
}

// Client code
const tv = new Tv(); // Concrete Implementation
const tvRemote = new RemoteControl(tv); // Abstraction (using the concrete implementation for delegates your work)
tvRemote.togglePower(); // Using abstract methods that use the concrete implementation without worrying about the device.

const radio = new Radio();
const radioRemote = new AdvancedRemoteControl(radio);
radioRemote.mute();
