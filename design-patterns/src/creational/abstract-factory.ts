// Produto abstrato
export interface Button {
    paint: () => void;
}

// Produtos concretos
class WinButton implements Button {
    paint(): void {
        console.log("Windows button painted.");
    }
}

class MacButton implements Button {
    paint(): void {
        console.log("MacOS button painted.");
    }
}

// Produto abstrato
interface Checkbox {
    paint: () => void;
}

// Produtos concretos
class WinCheckbox implements Checkbox {
    paint(): void {
        console.log("Windows checkbox painted.");
    }
}

class MacCheckbox implements Checkbox {
    paint(): void {
        console.log("MacOS checkbox painted.");
    }
}

// Fabrica abstrata
interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

// Fabricas concretas
class WinFactory implements GUIFactory {
    createButton(): Button {
        return new WinButton();
    }

    createCheckbox(): Checkbox {
        return new WinCheckbox();
    }
}

class MacFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton();
    }

    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

// Cliente
class Application {
    private factory: GUIFactory;

    private button: Button;

    constructor(factory: GUIFactory) {
        this.factory = factory;
        this.button = this.factory.createButton();
    }

    public paint() {
        this.button.paint();
    }
}

// Inicialização do Cliente
class ApplicationConfigurer {
    private factory: GUIFactory;

    constructor(OS: "Windows" | "Mac") {
        if (OS === "Windows") {
            this.factory = new WinFactory();
        } else if (OS === "Mac") {
            this.factory = new MacFactory();
        } else {
            throw new Error("Invalid operating system");
        }

        const app = new Application(this.factory);
        app.paint();
    }
}

console.log("\n ABSTRACT-FACTORY-TEST: \n");
new ApplicationConfigurer("Mac");
