import { NotificationService } from "../services/notification.service";
import { PushService } from "../services/push.service";

export class PushNotificationAdapter implements NotificationService {
    private pushService: PushService;

    constructor(pushService: PushService) {
        this.pushService = pushService;
    }

    sendNotification(message: string, recipient: string): void {
        this.pushService.sendPushNotification(
            `Notification for ${recipient}: ${message}`
        );
    }
}
