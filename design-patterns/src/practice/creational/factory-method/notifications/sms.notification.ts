import { Notification } from "./notification";

export class SMSNotification implements Notification {
    send(recipient: string, message: string): void {
        console.log(`Sending SMS to ${recipient}: ${message}`);
    }
}
