/**
 * Demonstrates abstract classes and methods in TypeScript.
 */
abstract class Vehicle {
    // Abstract classes cannot be instantiated directly, they must be subclassed
    constructor(protected brand: string) { }

    showBrand(): void {
        console.log(`Brand: ${this.brand}`);
    }

    // Abstract method must be implemented by derived classes
    abstract start(): void;
}

class Car extends Vehicle {
    constructor(brand: string, public model: string) {
        super(brand);
    }

    override start(): void {
        console.log(`${this.brand} ${this.model} is starting...`)
    }
}

const car = new Car("Toyota", "Corolla");

class Bike extends Vehicle {
    constructor(brand: string, public cc: number) {
        super(brand);
    }

    override start(): void {
        console.log(`${this.brand} ${this.cc}cc is starting...`)
    }
}

const bike = new Bike("Yamaha", 150); // Fixed the incorrect instantiation of Car

/**
 * Uses polymorphism to accept any Vehicle subclass.
 */
function startVehicles(v: Vehicle): void {
    v.showBrand();
    v.start();
}

startVehicles(car);
startVehicles(bike);