export interface Message {
    sender: string;
    content: string;
    timestamp: Date;
}

export class Peer {
    private name: string;
    private peers: Peer[] = [];

    constructor(name: string) {
        this.name = name;
    }

    connect(peer: Peer): void {
        this.peers.push(peer);
        peer.peers.push(this);

        console.log(`${this.name} connected with ${peer.name}`);
    }

    receiveMessage(message: Message): void {
        console.log(`${message.sender}: ${message.content}`);
    }

    sendMessageTo(peer: Peer, content: string): void {
        peer.receiveMessage({
            sender: this.name,
            content,
            timestamp: new Date(),
        });
    }
}

const alice = new Peer("Alice");
const bob = new Peer("Bob");

alice.connect(bob);

alice.sendMessageTo(bob, "Hello Bob");
bob.sendMessageTo(alice, "Hello");
