import { EmailNotificationAdapter } from "./adapters/email-notification.adapter";
import { PushNotificationAdapter } from "./adapters/push-notification.adapter";
import { SMSNotificationAdapter } from "./adapters/sms-notification.adapter";
import { NotificationClient } from "./main/app";
import { EmailService } from "./services/email.service";
import { PushService } from "./services/push.service";
import { SMSService } from "./services/sms.service";

// Email Adapter implementation
const emailService = new EmailService();
const emailNotificationAdapter = new EmailNotificationAdapter(emailService);

const notificationClient = new NotificationClient(emailNotificationAdapter);
notificationClient.notify("My Message", "test@email.com");

// SMS Adapter Implementation
const smsService = new SMSService();
const smsNotificationAdapter = new SMSNotificationAdapter(smsService);

notificationClient.setNotificationService(smsNotificationAdapter);
notificationClient.notify("My Message", "12345678");

// Push Adapter implementation
const pushService = new PushService();
const pushServiceAdapter = new PushNotificationAdapter(pushService);

notificationClient.setNotificationService(pushServiceAdapter);
notificationClient.notify("My Message", "user123");
