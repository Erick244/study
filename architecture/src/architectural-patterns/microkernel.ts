// Communication Interface & Abstract Module
export interface Module {
    execute(): void;
}

// Concrete Modules
export class UserModule implements Module {
    execute(): void {
        console.log("User module loaded...");
    }
}

export class ProductModule implements Module {
    execute(): void {
        console.log("Product module loaded...");
    }
}

// Microkernel
export class Microkernel {
    private modules: Module[] = [];

    loadModule(module: Module): void {
        this.modules.push(module);
    }

    execute(): void {
        this.modules.forEach((module) => module.execute());
    }
}

const microkernel = new Microkernel();
microkernel.loadModule(new UserModule());
microkernel.loadModule(new ProductModule());

microkernel.execute();
