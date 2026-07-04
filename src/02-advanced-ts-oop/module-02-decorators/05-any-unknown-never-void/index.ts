/**
 * Demonstrates the use of any, unknown, never, and void types.
 */

// 'any' allows assigning to any type without type checking. It disables TypeScript's safety.
function processAny(value: any) {
    console.log("Any value:", value);
    // No error here, even though value might not be a number
    let x: number = value;
}

// 'unknown' is a safer alternative to 'any'. You must perform type checking before using it.
function processUnknown(value: unknown) {
    if (typeof value === "string") {
        console.log("String value", value.toUpperCase()); // Safe to use string methods here
    } else {
        console.log("Not a string: ", value);
    }
}

// 'void' is used for functions that do not return a value.
function logMessage(message: string): void {
    console.log("Log: ", message);
    // No return statement
}

// 'never' represents a value that never occurs. Often used for functions that always throw an error or have infinite loops.
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

// 'never' is also useful for exhaustive type checking in switch statements.
function processStatus(status: "success" | "error") {
    switch (status) {
        case "success":
            console.log("Operation successful!");
            break;
        case "error":
            console.log("Operation failed!");
            break;
        default:
            // This block should never be reached if all cases are handled.
            const exhaustiveCheck: never = status;
            return exhaustiveCheck;
    }
}