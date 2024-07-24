import { SupportRequest } from "../requests/support.request";
import { SupportHandler } from "./support.handler";

export class SpecialSupportHandler extends SupportHandler {
    public handleRequest(request: SupportRequest): void {
        if (request.severity === 3) {
            console.log(
                `Special Support: Handling request - ${request.description}`
            );
        } else {
            super.handleRequest(request);
        }
    }
}
