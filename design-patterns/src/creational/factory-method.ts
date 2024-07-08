interface Button {
    render: () => void;
    onClick: () => void;
}

class WindowsButton implements Button {
    // Renderiza o bottão
    public render(): void {
        console.log("Windows button rendered.");
    }

    // Responsavel pelo click
    public onClick(): void {
        console.log("Windows button clicked.");
    }
}

class HTMLButton implements Button {
    // Renderiza o bottão
    public render(): void {
        console.log("HTML button rendered.");
    }

    // Responsavel pelo click
    public onClick(): void {
        console.log("HTML button clicked.");
    }
}

abstract class Dialog {
    // Método factory que retorna um botão padrão ou apenas define o método para as subclasses
    public abstract createButton(): Button;

    // Outros métodos proprios relacionados aos produtos criados.
    public render() {
        const button = this.createButton();
        button.render();
        button.onClick();
    }
}

class WindowsDialog extends Dialog {
    // Cria sua propria versão do método factory.
    public createButton(): Button {
        return new WindowsButton();
    }
}

class HTMLDialog extends Dialog {
    // Cria sua propria versão do método factory.
    public createButton(): Button {
        return new HTMLButton();
    }
}

class Application {
    private dialog: Dialog;

    constructor(OS: "Windows" | "HTML") {
        if (OS === "Windows") {
            this.dialog = new WindowsDialog();
        } else if (OS === "HTML") {
            this.dialog = new HTMLDialog();
        } else {
            throw new Error("Invalid operating system");
        }
    }

    public main(): void {
        this.dialog.render();
    }
}

// Teste
const App = new Application("Windows");

App.main();
