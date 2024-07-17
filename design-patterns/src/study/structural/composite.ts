// Abstract Component
export interface Graphic {
    move(x: number, y: number): void;
    draw(): void;
}

// Concrete Components (Leaf)
export class Dot implements Graphic {
    x: number;

    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    move(x: number, y: number): void {
        this.x += x;
        this.y += y;
    }

    draw(): void {
        console.log(`Drawing a dot in ${this.x} and ${this.y}`);
    }
}

export class Circle extends Dot {
    private radius: number;

    constructor(x: number, y: number, radius: number) {
        super(x, y);
        this.radius = radius;
    }

    draw(): void {
        console.log(
            `Drawing a circle in ${this.x} and ${this.y} with radius ${this.radius}`
        );
    }
}

// Concrete Component (Composite)
export class CompoundGraphic implements Graphic {
    private children: Graphic[] = [];

    add(child: Graphic): void {
        this.children.push(child);
    }

    remove(child: Graphic) {
        this.children = this.children.filter((c) => !(c === child));
    }

    move(x: number, y: number): void {
        this.children.forEach((child) => child.move(x, y));
    }

    draw(): void {
        this.children.forEach((child) => child.draw());
    }
}

// Client Code
export class ImageEditor {
    private all: CompoundGraphic;

    load() {
        this.all = new CompoundGraphic();
        this.all.add(new Dot(10, 10));
        this.all.add(new Circle(20, 20, 5));
    }

    groupSelected(components: Graphic[]) {
        const group = new CompoundGraphic();

        components.forEach((component) => {
            group.add(component);
            this.all.remove(component);
        });

        this.all.add(group);
        this.all.draw();
    }
}

const editor = new ImageEditor();
editor.load();

const selectedComponents = [new Circle(10, 10, 10), new Circle(34, 22, 15)];
editor.groupSelected(selectedComponents);
