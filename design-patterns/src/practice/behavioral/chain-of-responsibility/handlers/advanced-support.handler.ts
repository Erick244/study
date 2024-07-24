import { SupportRequest } from "../requests/support.request";
import { SupportHandler } from "./support.handler";

export class AdvancedSupportHandler extends SupportHandler {
    public handleRequest(request: SupportRequest): void {
        if (request.severity === 2) {
            console.log(
                `Advanced Support: Handling request - ${request.description}`
            );
        } else {
            super.handleRequest(request);
        }
    }
}
