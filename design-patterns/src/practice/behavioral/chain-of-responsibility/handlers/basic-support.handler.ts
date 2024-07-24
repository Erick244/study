import { SupportRequest } from "../requests/support.request";
import { SupportHandler } from "./support.handler";

export class BasicSupportHandler extends SupportHandler {
    public handleRequest(request: SupportRequest): void {
        if (request.severity === 1) {
            console.log(
                `Basic Support: Handling request - ${request.description}`
            );
        } else {
            super.handleRequest(request);
        }
    }
}
