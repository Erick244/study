import { ChatMediator } from "../mediators/chat.mediator";

export class User {
    constructor(private name: string, private chatRoom: ChatMediator) {
        this.chatRoom.connect(this);
    }

    public sendMessage(msg: string): void {
        this.chatRoom.sendMessage(msg, this);
    }

    public receiveMessage(msg: string, from: User): void {
        console.log(`${this.name} chat POV`);
        console.log(`${from.getName()}: ${msg}\n`);
    }

    public getName(): string {
        return this.name;
    }
}
