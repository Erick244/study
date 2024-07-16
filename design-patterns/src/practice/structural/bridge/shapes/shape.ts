import { Renderer } from "./../renderers/renderer";

export abstract class Shape {
    protected renderer: Renderer;

    constructor(renderer: Renderer) {
        this.renderer = renderer;
    }

    abstract draw(): void;
}
