import { Box } from "../products/box.product";

export class ContainerApplication {
    private all: Box[] = [];

    add(box: Box) {
        this.all.push(box);
    }

    getTotalPrices() {
        this.all.forEach((box) => {
            console.log(box.getPrice());
        });
    }
}
