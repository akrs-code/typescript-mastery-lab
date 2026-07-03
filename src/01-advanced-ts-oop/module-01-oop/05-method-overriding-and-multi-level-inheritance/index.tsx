/**
 * Demonstrates multi-level inheritance and method overriding.
 */
class Vehicle {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} is starting...`);
    }
}

const v1 = new Vehicle("Generic");
v1.start();

/**
 * Car extends Vehicle (Level 1 inheritance)
 */
class Car extends Vehicle {
    model: string;

    constructor(brand: string, model: string) {
        super(brand);
        this.model = model;
    }

    override start(): void {
        super.start();
        console.log(`${this.brand} ${this.model} is starting...`);
    }
}

const c1 = new Car("Toyota", "Corolla");
c1.start();

/**
 * ElectricCar extends Car (Level 2 inheritance)
 */
class ElectricCar extends Car {
    batteryLevel: number;
    
    constructor(model: string, brand: string, batteryLevel: number) {
        super(brand, model);
        this.batteryLevel = batteryLevel;
    }

    override start(): void {
        super.start();
        console.log(`${this.brand} ${this.model} is starting at ${this.batteryLevel}% battery level`);
    }
}

const e1 = new ElectricCar("Model S", "Tesla", 100);
e1.start();