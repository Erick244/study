import { NotificationService } from "../services/notification.service";
import { SMSService } from "./../services/sms.service";

export class SMSNotificationAdapter implements NotificationService {
    private smsService: SMSService;

    constructor(smsService: SMSService) {
        this.smsService = smsService;
    }
    sendNotification(message: string, recipient: string): void {
        this.smsService.sendSMS(recipient, message);
    }
}
