// Abstract Element
export interface Shape {
    move(x: number, y: number): void;
    draw(): void;
    accept(visitor: Visitor): void;
}

// Concrete Elements
export class Dot implements Shape {
    move(x: number, y: number): void {
        console.log(`Moving Dot to ${x}, ${y}`);
    }

    draw(): void {
        console.log("Drawing Dot");
    }

    accept(visitor: Visitor): void {
        visitor.visitDot(this);
    }
}

export class Circle implements Shape {
    move(x: number, y: number): void {
        console.log(`Moving Circle to ${x}, ${y}`);
    }

    draw(): void {
        console.log("Drawing Circle");
    }

    accept(visitor: Visitor): void {
        visitor.visitCircle(this);
    }
}

export class Rectangle implements Shape {
    move(x: number, y: number): void {
        console.log(`Moving Rectangle to ${x}, ${y}`);
    }

    draw(): void {
        console.log("Drawing Rectangle");
    }

    accept(visitor: Visitor): void {
        visitor.visitRectangle(this);
    }
}

export class CompoundShape implements Shape {
    move(x: number, y: number): void {
        console.log(`Moving CompoundShape to ${x}, ${y}`);
    }

    draw(): void {
        console.log("Drawing CompoundShape");
    }

    accept(visitor: Visitor): void {
        visitor.visitCompoundShape(this);
    }
}

// Abstract Visitor
export interface Visitor {
    visitDot(dot: Dot): void;
    visitCircle(circle: Circle): void;
    visitRectangle(rectangle: Rectangle): void;
    visitCompoundShape(compoundShape: CompoundShape): void;
}

// Concrete Visitors
export class XMLExportVisitor implements Visitor {
    visitDot(dot: Dot): void {
        console.log('<dot x="${dot.x}" y="${dot.y}"/>');
    }

    visitCircle(circle: Circle): void {
        console.log('<circle cx="${circle.x}" cy="${circle.y}" r="5"/>');
    }

    visitRectangle(rectangle: Rectangle): void {
        console.log(
            '<rectangle x="${rectangle.x}" y="${rectangle.y}" width="${rectangle.width}" height="${rectangle.height}"/>'
        );
    }

    visitCompoundShape(compoundShape: CompoundShape): void {
        console.log("<compound_shape>");
        console.log("shapes");
        console.log("</compound_shape>");
    }
}

// CLient Code
export class App {
    private shapes: Shape[] = [];

    export() {
        const exportVisitor = new XMLExportVisitor();
        this.shapes.forEach((shape: Shape) => shape.accept(exportVisitor));
    }

    addShape(shape: Shape): App {
        this.shapes.push(shape);

        return this;
    }
}

new App()
    .addShape(new Dot())
    .addShape(new Circle())
    .addShape(new Rectangle())
    .addShape(new CompoundShape())
    .export();
