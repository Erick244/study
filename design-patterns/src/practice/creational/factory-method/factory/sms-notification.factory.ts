import { Notification } from "../notifications/notification";
import { SMSNotification } from "../notifications/sms.notification";
import { NotificationFactory } from "./notification.factory";

export class SMSNotificationFactory extends NotificationFactory {
    public createNotification(): Notification {
        return new SMSNotification();
    }
}
