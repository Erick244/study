export interface Notification {
    send(recipient: string, message: string): void;
}
