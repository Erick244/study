import { Notification } from "./notification";

export class PushNotification implements Notification {
    send(recipient: string, message: string): void {
        console.log(`Sending push notification to ${recipient}: ${message}`);
    }
}
