import { User } from "../models/user.model";
import { ChatMediator } from "./chat.mediator";

export class ChatRoom implements ChatMediator {
    private users: User[] = [];

    public connect(user: User): void {
        this.users.push(user);
        console.log(`${user.getName()} has joined in the chat.`);
    }

    public sendMessage(msg: string, sender: User): void {
        this.users.forEach((user) => {
            if (sender !== user) {
                user.receiveMessage(msg, sender);
            }
        });
    }
}
