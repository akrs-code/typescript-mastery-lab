
/**
 * A class decorator that logs a message whenever a new instance is created.
 * @param constructor - The constructor of the class being decorated.
 */
function LogCreation<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
            console.log(`An instance of ${constructor.name} was created!`);
        }
    }
}

@LogCreation
class User {
    constructor(public name: string, public age: number) {}

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const user = new User("Alice", 30);
user.greet();