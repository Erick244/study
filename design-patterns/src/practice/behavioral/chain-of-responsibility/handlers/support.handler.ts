import { SupportRequest } from "../requests/support.request";

export abstract class SupportHandler {
    protected nextHandler: SupportHandler;

    public setNext(handler: SupportHandler): SupportHandler {
        this.nextHandler = handler;

        return handler;
    }

    public handleRequest(request: SupportRequest): void {
        if (request.severity <= 0) {
            console.log(
                `Support request with severity ${request.severity} and description "${request.description}" has been logged.`
            );
        } else {
            this.nextHandler.handleRequest(request);
        }
    }
}
