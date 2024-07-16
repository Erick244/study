interface Rounded {
    getRadius(): number;
}

class RoundedHole implements Rounded {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }

    public fits(peg: Rounded) {
        return this.radius >= peg.getRadius();
    }
}

class RoundedPeg implements Rounded {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }
}

class SquarePeg {
    private width: number;

    constructor(width: number) {
        this.width = width;
    }

    public getWidth(): number {
        return this.width;
    }
}

class SquarePegAdapter implements Rounded {
    private peg: SquarePeg;

    constructor(peg: SquarePeg) {
        this.peg = peg;
    }

    public getRadius(): number {
        return (this.peg.getWidth() * Math.sqrt(2)) / 2;
    }
}

class PegApplication {
    public main(): void {
        const hole = new RoundedHole(5);
        const roundedPeg = new RoundedPeg(5);
        console.log(hole.fits(roundedPeg)); // True

        const smallSquarePeg = new SquarePeg(4);
        // console.log(hole.fits(smallSquarePeg)); // Not Compile

        const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg);
        console.log(hole.fits(smallSquarePegAdapter)); // True

        const bigSquarePeg = new SquarePeg(10);
        const bigSquarePegAdapter = new SquarePegAdapter(bigSquarePeg);
        console.log(hole.fits(bigSquarePegAdapter)); // False
    }
}

new PegApplication().main();
