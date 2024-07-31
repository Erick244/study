// Abstract Subscriber
export interface EventListeners {
    update(filename: string): void;
}

// Concrete Subscribers
export class EmailAlertsListener implements EventListeners {
    constructor(private email: string, private message: string) {}

    update(filename: string): void {
        console.log(`Email from ${this.email} ${filename}: ${this.message}`);
    }
}

export class loggingListener implements EventListeners {
    private log: File;

    constructor(logFilename: string, private message: string) {
        this.log = new File([], logFilename);
    }

    update(filename: string): void {
        this.log = new File([this.message], filename);
        console.log(`Logged to ${this.log.name}: ${this.message}`);
    }
}

// Manager Publisher
export type EventTypes = "open" | "save";

export class EventManager {
    private listeners: Map<EventListeners, EventTypes> = new Map();

    subscribe(listener: EventListeners, eventType: EventTypes): void {
        this.listeners.set(listener, eventType);
    }

    unsubscribe(listener: EventListeners, eventType: EventTypes): void {
        const event = this.listeners.get(listener);

        if (event === eventType) {
            this.listeners.delete(listener);
        }
    }

    notify(eventType: EventTypes, filename: string): void {
        this.listeners.forEach((event, listener) => {
            if (eventType === event) {
                listener.update(filename);
            }
        });
    }
}

// Concrete Publisher
export class Editor {
    public events: EventManager;
    private file: File;

    constructor() {
        this.events = new EventManager();
    }

    openFile(path: string): void {
        this.file = new File([], path);
        this.events.notify("open", this.file.name);
    }

    saveFile() {
        // Logic to save the file...
        this.events.notify("save", this.file.name);
    }

    // Others...
}

// Client Code
export class Application {
    private editor: Editor;

    main() {
        this.editor.openFile("example.txt");
        this.editor.saveFile();
    }

    config() {
        this.editor = new Editor();

        const emailAlerts = new EmailAlertsListener(
            "user@example.com",
            "File saved"
        );
        this.editor.events.subscribe(emailAlerts, "save");

        const logging = new loggingListener("example/log.txt", "File opened");
        this.editor.events.subscribe(logging, "open");
    }
}

const app = new Application();
app.config();

app.main();
