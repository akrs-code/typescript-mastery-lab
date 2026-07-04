/**
 * Demonstrates how to define and implement interfaces in TypeScript.
 */
interface Drivable {
    // Methods that any implementing class must provide
    start(): void;
    stop(): void;
}

/**
 * Car class implements the Drivable interface, promising to provide 
 * the start and stop methods.
 */
class Car implements Drivable {
    constructor(public brand: string, public model: string) { }

    start(): void {
        console.log(`${this.brand} ${this.model} is starting...`);
    }

    stop(): void {
        console.log(`${this.brand} ${this.model} is stopped.`);
    }
}

const car = new Car("Toyota", "Corolla");
car.start();
car.stop();