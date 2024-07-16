import { NotificationService } from "../services/notification.service";

export class NotificationClient {
    private notificationService: NotificationService;

    constructor(notificationService: NotificationService) {
        this.notificationService = notificationService;
    }

    notify(message: string, recipient: string): void {
        this.notificationService.sendNotification(message, recipient);
    }

    public setNotificationService(notificationService: NotificationService) {
        this.notificationService = notificationService;
    }
}
