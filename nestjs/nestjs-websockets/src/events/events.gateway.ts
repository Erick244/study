import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway()
export class EventsGateway {
	
	@SubscribeMessage("events")
	handleEvent(@MessageBody() data: string): string {
		return data;
	}
}