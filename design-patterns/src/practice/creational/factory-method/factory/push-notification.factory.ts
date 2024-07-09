import { Notification } from "../notifications/notification";
import { PushNotification } from "../notifications/push.notification";
import { NotificationFactory } from "./notification.factory";

export class PushNotificationFactory extends NotificationFactory {
    public createNotification(): Notification {
        return new PushNotification();
    }
}
