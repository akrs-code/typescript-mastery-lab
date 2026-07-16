/**
 * Demonstrates Utility Types: Pick, Omit, and Record.
 */
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    inStock: boolean;
}

type ProductPreview = Pick<Product, "id" | "name" | "price">;

function showPreview(product: ProductPreview) {
    console.log("Product Preview", product);
}

showPreview({ id: 101, name: "Laptop", price: 4000 });

type ProductForm = Omit<Product, "id" | "inStock">;

function createProduct(product: ProductForm): Product {
    const newProduct: Product = {
        ...product,
        id: Date.now(),
        inStock: true,
    };
    console.log("New product created:", newProduct);
    return newProduct;
}

createProduct({
    name: "Smartphone",
    price: 35000,
    description: "High-end Android phone"
})

type Category = "Electronics" | "Books" | "Clothing";

const productCatalog: Record<Category, Product[]> = {
    Electronics: [
        { id: 201, name: "Tablet", price: 300, description: "10-inch", inStock: true },
    ],
    Books: [
        { id: 201, name: "Harry Potter", price: 300, description: "Best selling book", inStock: true },
    ],
    Clothing: [
        { id: 201, name: "Jacket", price: 300, description: "Furry jacket", inStock: true },
    ],
}

console.log("Catalog by category", productCatalog);