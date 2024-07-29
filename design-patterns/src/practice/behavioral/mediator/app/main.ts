import { ChatRoom } from "../mediators/chat-room.mediator";
import { User } from "../models/user.model";

export class ChatApplication {
    main() {
        const chatRoom = new ChatRoom();

        const user1 = new User("Alice", chatRoom);
        const user2 = new User("Bob", chatRoom);
        const user3 = new User("John", chatRoom);

        user1.sendMessage("Hello Guys!");
        user2.sendMessage("Hello Alice! How are you?");
        user3.sendMessage("Hello Alice!");
    }
}
