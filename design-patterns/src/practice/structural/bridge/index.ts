import { DrawingApplication } from "./main/app";
import { CanvasRenderer } from "./renderers/canvas.renderer";
import { SVGRenderer } from "./renderers/svg.renderer";
import { Circle } from "./shapes/circle.shape";
import { Square } from "./shapes/square.shape";

const app = new DrawingApplication();

const svgRenderer = new SVGRenderer();
const svgCircle = new Circle({ x: 10, y: 10 }, 10, svgRenderer);
app.addShape(svgCircle);

const svgSquare = new Square({ x: 1, y: 12 }, 25, svgRenderer);
app.addShape(svgSquare);

const canvasRenderer = new CanvasRenderer();
const canvasCircle = new Circle({ x: 23, y: 22 }, 30, canvasRenderer);
app.addShape(canvasCircle);

const canvasSquare = new Square({ x: 10, y: 15 }, 25, canvasRenderer);
app.addShape(canvasSquare);

app.renderShapes();
