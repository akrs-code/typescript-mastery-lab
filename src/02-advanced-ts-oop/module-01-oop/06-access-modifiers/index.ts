/**
 * Demonstrates access modifiers (public, private, protected) in TypeScript.
 */
class Vehicle {
    // public: Accessible from anywhere
    public brand: string;
    // private: Accessible only within the Vehicle class
    private serialNumber: string; 

    constructor(brand: string, serialNumber: string) {
        this.brand = brand;
        this.serialNumber = serialNumber;
    }

    /**
     * protected: Accessible within Vehicle and its subclasses.
     */
    protected initEngine() {
        console.log(`[Internal] Initializing engine for serial: ${this.serialNumber}`);
    }

    public start() {
        // Accessing a protected method from within the same class
        this.initEngine(); 
        console.log(`${this.brand} is starting...`);
    }
}

class Car extends Vehicle {
    public model: string;

    constructor(brand: string, model: string, serialNumber: string) {
        super(brand, serialNumber);
        this.model = model;
    }

    override start(): void {
        // Accessing a protected method inherited from the parent class
        this.initEngine(); 
        console.log(`${this.brand} ${this.model} is ready to drive.`);
    }
}

const myCar = new Car("Toyota", "Corolla", "XYZ12345");
myCar.start(); 