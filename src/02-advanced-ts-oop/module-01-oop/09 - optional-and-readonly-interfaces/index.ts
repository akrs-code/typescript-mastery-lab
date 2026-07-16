/**
 * Demonstrates optional (?) and readonly modifiers in TypeScript interfaces.
 */
interface Product {
    // readonly: Cannot be changed after initialization
    readonly id: number;
    name: string;
    // optional: Property might or might not exist
    price?: number;
    description?: string;
}

const product1: Product = {
    id: 1,
    name: "Laptop",
    price: 3000,
    description: "A high-performance laptop"
};

const product2: Product = {
    id: 2, // Fixed duplicate ID
    name: "Monitor", // Changed name to make more sense
};

/**
 * Utility function to print product details safely checking optional properties.
 */
function printProductDetails(product: Product) {
    console.log(`ID: ${product.id}, Name: ${product.name}`);

    // Check if optional property 'price' is defined
    if (product.price !== undefined) {
        console.log(`Price: $${product.price}`);
    }

    // Check if optional property 'description' is defined
    if (product.description) {
        console.log(`Description: ${product.description}`); // Fixed wrong label (was "Price:")
    }
    console.log("-------------------");
}

printProductDetails(product1);
printProductDetails(product2);

// Array of products
const inventory: Product[] = [product1, product2];

inventory.push({
    id: 3,
    name: "Keyboard",
    price: 200
});

inventory.forEach(printProductDetails);