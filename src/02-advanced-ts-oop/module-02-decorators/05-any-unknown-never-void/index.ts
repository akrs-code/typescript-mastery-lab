function processAny(value: any) {
    console.log("Any value:", value);
    let x: number = value;
}

function processUnknown(value:unknown){
    if(typeof value === "string"){
        console.log("String value", value.toUpperCase());
    } else {
        console.log("Not a string: ", value);
    }
}