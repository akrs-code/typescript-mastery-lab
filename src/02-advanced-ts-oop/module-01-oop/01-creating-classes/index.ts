/**
 * Demonstrates the creation of a basic class in TypeScript.
 */
class Car {
    // Class properties defining the state of the object
    brand: string;
    year: number;

    /**
     * Initializes a new instance of the Car class.
     * @param brand - The brand of the car (e.g., "Tesla").
     * @param year - The manufacturing year.
     */
    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
    }

    /**
     * Returns a formatted string displaying car information.
     */
    displayInfo(): string {
        return `Brand: ${this.brand} | Year: ${this.year}`;
    }
}

// Create an instance of the Car class
let car1 = new Car("Tesla", 2000);

// Log the car information to the console
console.log(car1.displayInfo());
