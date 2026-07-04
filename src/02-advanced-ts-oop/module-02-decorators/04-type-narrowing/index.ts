/**
 * Demonstrates Type Narrowing in TypeScript.
 */

interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

/**
 * Returns a random pet, either a Bird or a Fish.
 */
function getPet(): Bird | Fish {
    return Math.random() > 0.5 ?
        {
            fly() {
                console.log("Flying");
            },
            layEggs() {
                console.log("Laying eggs");
            }
        }
        :
        {
            swim() {
                console.log("Swimming"); // Fixed: was "Flying"
            },
            layEggs() {
                console.log("Laying eggs");
            }
        };
}

function move(pet: Bird | Fish) {
    pet.layEggs();

    if("fly" in pet) {
        pet.fly();
    } else {
        pet.swim();
    }
}

const pet = getPet();
move(pet);