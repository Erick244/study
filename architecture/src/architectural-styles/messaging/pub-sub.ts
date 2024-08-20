export type DOMEventCallback = (eventData: any) => void;
export type DOMEvents = "click" | "focus" | "mousemove";

// Broker
export class DOMEventBroker {
    private subscribers: Map<string, DOMEventCallback[]> = new Map();

    subscribe(event: DOMEvents, callback: DOMEventCallback): void {
        if (!this.subscribers.has(event)) {
            this.subscribers.set(event, []);
        }

        this.subscribers.get(event)?.push(callback);
    }

    publish(event: DOMEvents, eventData: any): void {
        if (!this.subscribers.has(event)) return;

        this.subscribers.get(event)?.forEach((callback) => callback(eventData));
    }
}

// Example usage:

const element = new DOMEventBroker();

element.subscribe("click", (eventData) => {
    console.log("Element position: ", eventData);
});

element.subscribe("mousemove", (eventData) => {
    console.log("Mouse position: ", eventData);
});

element.publish("click", { x: 10, y: 10 });
element.publish("mousemove", { x: 1, y: 23 });
