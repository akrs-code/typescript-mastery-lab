/**
 * Demonstrates Method and Property Decorators in TypeScript.
 */

/**
 * Property decorator that logs when a property is accessed or modified.
 */
function logProperty(target: any, propertyKey: string) {
    let value = target[propertyKey];
    Object.defineProperty(target, propertyKey, {
        get() {
            console.log(`Getting value of ${propertyKey}: ${value}`);
            return value;
        },
        set(newVal) {
            console.log(`Setting value of ${propertyKey} to: ${newVal}`);
            value = newVal;
        },
        configurable: true,
        enumerable: true
    });
}

function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling method ${propertyKey} with args: ${args.join(', ')}`);
        const result = originalMethod.apply(this, args);
        console.log(`Method ${propertyKey} returned: ${result}`);
        return result;
    };
    return descriptor;
}

class Product {
    @logProperty
    public price: number = 0;

    constructor(public name: string, initialPrice: number) {
        this.price = initialPrice;
    }

    @logMethod
    calculateDiscount(discountPercentage: number): number {
        return this.price * (1 - discountPercentage / 100);
    }
}

const laptop = new Product("Laptop", 1000);
const currentPrice = laptop.price;
const salePrice = laptop.calculateDiscount(15);