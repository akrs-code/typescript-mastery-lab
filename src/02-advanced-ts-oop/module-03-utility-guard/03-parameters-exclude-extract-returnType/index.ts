/**
 * Demonstrates Utility Types: Parameters, Exclude, Extract, and ReturnType.
 */
function calculateDiscount(price: number, discount: number) {
    return price - price * (discount / 100);
}

type DiscountResult = ReturnType<typeof calculateDiscount>;

const finalPrice: DiscountResult = calculateDiscount(100, 10);

console.log("Final price after discount", finalPrice);

type DiscountParams = Parameters<typeof calculateDiscount>;

const params: DiscountParams = [200, 15];
console.log("Discount using tuple params: ", calculateDiscount(...params));

type Roles = "admin" | "editor" | "viewer" | "guest";

type AuthenticatedRoles = Exclude<Roles, "guest">;

function allowAccess(role: AuthenticatedRoles) {
    console.log(`Access granted for role: ${role}`);
}

allowAccess("admin");


type ContentRoles = Extract<Roles, "editor" | "viewer">;
function showContent(role: ContentRoles) {
    console.log(`Showing content for role: ${role}`)
}

showContent("editor")
showContent("viewer")

function applyRoleDiscount(
    role: Roles,
    ...args: Parameters<typeof calculateDiscount>
): DiscountResult {
    if (role === "admin") return calculateDiscount(args[0], 50);
    if (role === "editor") return calculateDiscount(args[0], 25);
    if (role === "viewer") return calculateDiscount(args[0], 10);
    return calculateDiscount(args[0], 0);
}

console.log("Admin price: ", applyRoleDiscount("admin", 100, 0));
console.log("Viewer price: ", applyRoleDiscount("viewer", 100, 0));
console.log("Guest price: ", applyRoleDiscount("guest", 100, 0));