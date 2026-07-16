class Vehicle {
    public brand: string;
    private serialNumber: string; 

    constructor(brand: string, serialNumber: string) {
        this.brand = brand;
        this.serialNumber = serialNumber;
    }

    protected initEngine() {
        console.log(`[Internal] Initializing engine for serial: ${this.serialNumber}`);
    }

    public start() {
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
        this.initEngine(); 
        console.log(`${this.brand} ${this.model} is ready to drive.`);
    }
}


const myCar = new Car("Toyota", "Corolla", "XYZ12345");

myCar.start(); 