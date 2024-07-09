import { Notification } from "../notifications/notification";

export abstract class NotificationFactory {
    public abstract createNotification(): Notification;

    public sendNotification(recipient: string, message: string): void {
        const notification = this.createNotification();
        notification.send(recipient, message);
    }
}
