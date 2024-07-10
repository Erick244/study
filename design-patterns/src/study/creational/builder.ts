// Products
class Car {
    seats: number;
    engine: any;
    tripComputer: boolean;
    gps: boolean;

    // Car properties
}

class Manual {
    seats: number;
    engine: any;
    tripComputer: boolean;
    gps: boolean;

    // Manual properties
}

// Builder interface
export interface Builder {
    reset(): void;
    setSeats(seats: number): void;
    setEngine(engine: any): void;
    setTripComputer(): void;
    setGPS(): void;
}

// Concrete Builders
class CarBuilder implements Builder {
    private car: Car;

    public reset(): void {
        this.car = new Car();
    }

    public setSeats(seats: number): void {
        this.car.seats = seats;
    }
    public setEngine(engine: any): void {
        this.car.engine = engine;
    }
    public setTripComputer(): void {
        this.car.tripComputer = true;
    }
    public setGPS(): void {
        this.car.gps = true;
    }

    public getResult(): Car {
        return this.car;
    }
}

class ManualBuilder implements Builder {
    private manual: Manual;

    public reset(): void {
        this.manual = new Manual();
    }

    public setSeats(seats: number): void {
        this.manual.seats = seats;
    }
    public setEngine(engine: any): void {
        this.manual.engine = engine;
    }
    public setTripComputer(): void {
        this.manual.tripComputer = true;
    }
    public setGPS(): void {
        this.manual.gps = true;
    }

    public getResult(): Manual {
        return this.manual;
    }
}

// Director class
class Director {
    public buildSUV(builder: Builder): void {
        builder.reset();
        builder.setSeats(4);
        builder.setEngine("SUVEngine");
        builder.setTripComputer();
        builder.setGPS();
    }

    public buildSportsCar(builder: Builder): void {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine("SportsCarEngine");
        builder.setTripComputer();
        builder.setGPS();
    }
}

// Client code
function makeSportCar() {
    const director = new Director();

    const carBuilder = new CarBuilder();
    director.buildSportsCar(carBuilder);
    const car = carBuilder.getResult();

    const manualBuilder = new ManualBuilder();
    director.buildSportsCar(manualBuilder);
    const manual = manualBuilder.getResult();

    console.log(
        `Car: ${JSON.stringify(car)}\nManual: ${JSON.stringify(manual)}`
    );
}

makeSportCar();
