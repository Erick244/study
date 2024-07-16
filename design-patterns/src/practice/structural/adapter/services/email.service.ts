export class EmailService {
    sendEmail(to: string, subject: string, body: string): void {
        console.log(
            `Sending email to ${to} with subject '${subject}' and body: '${body}'`
        );
    }
}
