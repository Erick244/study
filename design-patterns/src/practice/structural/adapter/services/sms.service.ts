export class SMSService {
    sendSMS(to: string, message: string): void {
        console.log(`Sending SMS to ${to} with message: '${message}'`);
    }
}
