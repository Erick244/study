import { EmailService } from "../services/email.service";
import { NotificationService } from "../services/notification.service";

export class EmailNotificationAdapter implements NotificationService {
    private emailService: EmailService;

    constructor(emailService: EmailService) {
        this.emailService = emailService;
    }

    sendNotification(message: string, recipient: string): void {
        this.emailService.sendEmail(recipient, "New notification", message);
    }
}
