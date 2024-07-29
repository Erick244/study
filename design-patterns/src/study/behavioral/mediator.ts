// Abstract Mediator
export interface Mediator {
    notify(sender: Component, event: string): void;
}

// Abstract Component
export abstract class Component {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    public onClick() {
        this.mediator.notify(this, "click");
    }

    public onKeypress() {
        this.mediator.notify(this, "keypress");
    }
}

// Concrete Components
export class Button extends Component {
    constructor(mediator: Mediator, private label: string) {
        super(mediator);
    }
}

export class Input extends Component {
    constructor(
        mediator: Mediator,
        private placeholder: string,
        private type: "text" | "password"
    ) {
        super(mediator);
    }

    public onFocus() {
        this.mediator.notify(this, "focus");
    }
}

export class CheckBox extends Component {
    public checked: boolean = false;
    public onCheck() {
        this.checked = !this.checked;
        this.mediator.notify(this, "check");
    }
}

// Concrete Mediators
export class AuthDialog implements Mediator {
    private title: string;
    protected okButton: Button;
    protected cancelButton: Button;

    constructor(title: string) {
        this.title = title;
        this.okButton = new Button(this, "OK");
        this.cancelButton = new Button(this, "Cancel");
    }

    public notify(sender: Component, event: string): void {
        if (sender === this.cancelButton || sender === this.okButton) {
            this.closeDialog();
        }
    }

    public closeDialog() {
        // implementation...
    }

    public showDialog() {
        // implementation...
    }
}

export class SignupDialog extends AuthDialog {
    private username: Input;
    private password: Input;

    private haveDog: CheckBox;
    private dogName: Input | null = null;

    constructor() {
        super("Register");
        this.username = new Input(this, "Username", "text");
        this.password = new Input(this, "Password", "password");
        this.haveDog = new CheckBox(this);
    }

    public notify(sender: Component, event: string): void {
        if (this.haveDog.checked) {
            this.dogName = new Input(this, "Dog's Name", "text");
        }

        if (sender === this.okButton && event === "click") {
            // Create a new user...
            this.closeDialog();
        } else {
            this.closeDialog();
        }
    }
}

export class LoginDialog extends AuthDialog {
    private username: Input;
    private password: Input;

    constructor() {
        super("Login");
        this.username = new Input(this, "Username", "text");
        this.password = new Input(this, "Password", "password");
    }

    public notify(sender: Component, event: string): void {
        if (sender === this.okButton && event === "click") {
            // Login user...
            this.closeDialog();
        } else {
            this.closeDialog();
        }
    }
}
