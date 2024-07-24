// Abstract Handler
export interface ComponentWithContextualHelp {
    showHelp(): void;
    setContainer(container: Container): void;
}

// Base Concrete Handler
export class Component implements ComponentWithContextualHelp {
    public tooltipText: string;

    // Next Handler
    protected container: Container;

    showHelp(): void {
        if (this.tooltipText) {
            console.log(`Help for ${this.tooltipText}`);
        } else {
            this.container.showHelp();
        }
    }

    setContainer(container: Container): void {
        this.container = container;
    }
}

// Chain
export class Container extends Component {
    protected children: Component[] = [];

    add(child: Component): void {
        this.children.push(child);
        child.setContainer(this);
    }
}

// Primitive handler
export class Button extends Component {
    // ...
}

// Composite handlers
export class Panel extends Container {
    public modalHelpText: string;

    showHelp(): void {
        if (this.modalHelpText) {
            console.log(`Modal Help for ${this.modalHelpText}`);
        } else {
            super.showHelp();
        }
    }
}

export class Dialog extends Container {
    public wikiPageURL: string;

    showHelp(): void {
        if (this.wikiPageURL) {
            console.log(`Open this page: ${this.wikiPageURL}`);
        } else {
            super.showHelp();
        }
    }
}

// Client Code
export class App {
    private component: Component;

    constructor() {
        const dialog = new Dialog();
        dialog.wikiPageURL = "https://en.wikipedia.org";

        const panel = new Panel();
        panel.modalHelpText = "This is a modal panel";

        const okButton = new Button();

        const cancelButton = new Button();
        cancelButton.tooltipText = "Click to cancel";

        panel.add(okButton);
        panel.add(cancelButton);
        dialog.add(panel);

        okButton.showHelp(); // Show a Panel help
    }

    onF1KeyPress(): void {
        // const component = this.getComponentAtMouseCoords();
        // component.showHelp();
    }
}

const app = new App();
