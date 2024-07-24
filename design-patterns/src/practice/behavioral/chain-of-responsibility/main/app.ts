import { SupportHandler } from "../handlers/support.handler";
import { SupportRequest } from "../requests/support.request";

export class Client {
    private handler: SupportHandler;

    constructor(handler: SupportHandler) {
        this.handler = handler;
    }

    public sendRequest(request: SupportRequest) {
        this.handler.handleRequest(request);
    }
}
