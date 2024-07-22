// Flyweight Class (Intrinsic)
export class TreeType {
    private name: string;

    private color: string;

    private texture: string;

    constructor(name: string, color: string, texture: string) {
        this.name = name;
        this.color = color;
        this.texture = texture;
    }

    public draw(canvas: any, x: number, y: number): void {
        // 1. Create a bitmap tipe, color and texture.
        // 2. Draw the bitmap in the specified coords x and y in table.
        console.log(
            `Drawing ${this.name} with ${this.color} and ${this.texture} from ${canvas} in coordinates ${x} and ${y}`
        );
    }
}

// Flyweight Factory
export class TreeTypeFactory {
    // Cache
    private static treeTypes: Record<string, TreeType> = {};

    public static getTreeType(
        name: string,
        color: string,
        texture: string
    ): TreeType {
        const key = name + color + texture;
        let treeType = this.treeTypes[key];

        if (!treeType) {
            treeType = new TreeType(name, color, texture);
            this.treeTypes[key] = treeType;
        }

        return treeType;
    }
}

// Context (Extrinsic) & Flyweight Client
export class Tree {
    private x: number;

    private y: number;

    private type: TreeType;

    constructor(x: number, y: number, type: TreeType) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    public draw(canvas: any): void {
        this.type.draw(canvas, this.x, this.y);
    }
}

// Flyweight Client
export class Forest {
    private trees: Tree[] = [];

    public plantTree(): void {
        const type = TreeTypeFactory.getTreeType("Oak", "Green", "Smooth");
        this.trees.push(
            new Tree(Math.random() * 100, Math.random() * 100, type)
        );
    }

    public draw(canvas: any): void {
        this.trees.forEach((tree) => tree.draw(canvas));
    }
}

// Client Code
export function createAForest() {
    const forest = new Forest();

    for (let i = 0; i < 10; i++) {
        forest.plantTree();
    }

    forest.draw("canvas");
}

createAForest();
