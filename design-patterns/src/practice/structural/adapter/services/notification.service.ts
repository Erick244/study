export interface NotificationService {
    sendNotification(message: string, recipient: string): void;
}
