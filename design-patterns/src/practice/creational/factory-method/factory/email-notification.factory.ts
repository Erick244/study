import { EmailNotification } from "../notifications/email.notification";
import { Notification } from "../notifications/notification";
import { NotificationFactory } from "./notification.factory";

export class EmailNotificationFactory extends NotificationFactory {
    public createNotification(): Notification {
        return new EmailNotification();
    }
}
