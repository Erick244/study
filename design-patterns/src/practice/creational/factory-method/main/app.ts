import { NotificationFactory } from "../factory/notification.factory";

export class NotificationApp {
    private factory: NotificationFactory;

    constructor(factory: NotificationFactory) {
        this.factory = factory;
    }

    public sendNotification(recipient: string, message: string): void {
        this.factory.sendNotification(recipient, message);
    }
}
