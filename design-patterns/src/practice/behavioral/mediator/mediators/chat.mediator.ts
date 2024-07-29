import { User } from "../models/user.model";

export interface ChatMediator {
    sendMessage(msg: string, sender: User): void;
    connect(user: User): void;
}
