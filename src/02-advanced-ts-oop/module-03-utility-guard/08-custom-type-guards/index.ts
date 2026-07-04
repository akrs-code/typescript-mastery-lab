/**
 * Demonstrates: custom type guards
 */
interface User {
    id: number;
    name: string;
    email?: string;
}

function isUser(obj: any): obj is User {
return(
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.id === "number" &&
    typeof obj.name === "string"
)
}

function processApiResponse(data :unknown){
    if(isUser(data)){
        console.log("Valid User received", data.name);
    } else {
        console.log("Invalid response");
    }
}

const apiResponse1: unknown = {id:1, name:"Alice", email:"alice@example.com"}
const apiResponse2: unknown = {username: "Bob"}
const apiResponse3: unknown = "just a string"


processApiResponse(apiResponse1);
processApiResponse(apiResponse2);
processApiResponse(apiResponse3);
