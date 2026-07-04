/**
 * Demonstrates: type guards operators
 */
// typeof with Primitive Types
function processInput(value: string | number | boolean) {
    if (typeof value === "string") {
        console.log("Saving text input: ", value.toUpperCase());
    } else if (typeof value === "number") {
        console.log("Saving numeric input after validation: ", value.toFixed(2));
    } else if (typeof value === "boolean") {
        console.log("Saving checkbox state:", value ? "Checked": "Unchecked");
    }
}

processInput("typescript course");
processInput(1299);
processInput(true);

// instanceof with Classes
class Admin {
    manageUsers(){
        console.log("Admin: Managing users and system settings.");
    }
}

class Customer {
    purchase(){
        console.log("Customer: Purchasing items");
    }
}

function handleUser (user: Admin | Customer){
    if(user instanceof Admin){
        user.manageUsers();
    } else if(user instanceof Customer) {
        user.purchase();
    }
}

handleUser(new Admin());
handleUser(new Customer());

// mixing typeof and instanceof
function logEvent(event: string | Date){
    if(typeof event === "string") {
        console.log("User event message", event);
    } else if (event instanceof Date){
        console.log("System event logged at:",  event.toISOString());
    }
}

logEvent("User clicked on 'Buy Now'");
logEvent(new Date());
