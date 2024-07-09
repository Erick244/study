import { EmailNotificationFactory } from "./factory/email-notification.factory";
import { PushNotificationFactory } from "./factory/push-notification.factory";
import { SMSNotificationFactory } from "./factory/sms-notification.factory";
import { NotificationApp } from "./main/app";

// Email product
const emailNotificationApp = new NotificationApp(
    new EmailNotificationFactory()
);
emailNotificationApp.sendNotification(
    "example@example.com",
    "Hello e-mail App"
);

// SMS product
const smsNotificationApp = new NotificationApp(new SMSNotificationFactory());
smsNotificationApp.sendNotification("12345678", "Hello SMS App");

// Push product
const pushNotificationApp = new NotificationApp(new PushNotificationFactory());
pushNotificationApp.sendNotification("user123", "Hello Push App");
