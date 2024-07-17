import { ContainerApplication } from "./main/app";
import { Box } from "./products/box.product";
import { Keyboard } from "./products/keyboard.product";
import { Mouse } from "./products/mouse.product";

const app = new ContainerApplication();

const mouse = new Mouse(199.99);
const keyboard = new Keyboard(299.99);

const box1 = new Box();
box1.add(mouse);
box1.add(keyboard);

const box2 = new Box();
box2.add(mouse);

app.add(box1);
app.add(box2);

app.getTotalPrices();
