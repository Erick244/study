// Abstract prototype
abstract class Shape {
    x: number;

    y: number;

    color: string;

    constructor(source?: Shape) {
        if (source) {
            this.x = source.x;
            this.y = source.y;
            this.color = source.color;
        }
    }

    abstract clone(): Shape;
}

// Concrete prototypes
class Rectangle extends Shape {
    width: number;

    height: number;

    constructor(source?: Rectangle) {
        super(source);

        if (source) {
            this.width = source.width;
            this.height = source.height;
        }
    }

    clone(): Shape {
        return new Rectangle(this);
    }
}

class Circle extends Shape {
    radius: number;

    constructor(source?: Circle) {
        super(source);

        if (source) {
            this.radius = source.radius;
        }
    }

    clone(): Shape {
        return new Circle(this);
    }
}

class Application {
    shapes: Shape[] = [];

    constructor() {
        const circle = new Circle();
        circle.x = 10;
        circle.y = 10;
        circle.radius = 20;
        this.shapes.push(circle);

        const anotherCircle = circle.clone();
        this.shapes.push(anotherCircle);

        const rectangle = new Rectangle();
        rectangle.width = 100;
        rectangle.height = 50;
        rectangle.color = "Red";
        this.shapes.push(rectangle);
    }

    logic() {
        const shapesCopy = [] as Shape[];

        for (const shape of this.shapes) {
            shapesCopy.push(shape.clone());
        }

        console.log("Shapes: " + JSON.stringify(shapesCopy, null, 2));
    }
}

const app = new Application();
app.logic();
