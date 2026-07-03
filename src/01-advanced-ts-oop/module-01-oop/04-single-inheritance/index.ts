/**
 * Demonstrates single inheritance and method overriding in TypeScript.
 */
class Vehicle {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    /**
     * Starts the vehicle. Can be overridden by subclasses.
     */
    start() {
        console.log(`${this.brand} is starting...`);
    }
}

const v1 = new Vehicle("Generic");
v1.start();

/**
 * Car subclass inheriting from Vehicle.
 */
class Car extends Vehicle {
    model: string;

    constructor(brand: string, model: string) {
        // Call the parent constructor
        super(brand);
        this.model = model;
    }

    /**
     * Overrides the parent start method with custom behavior.
     */
    override start(): void {
        // Optionally call parent method first
        super.start();
        console.log(`${this.brand} ${this.model} is starting...`);
    }
}

const c1 = new Car("Toyota", "Corolla");
c1.start();
