let age = 22;
let region = "East";
let subtotal = 150;
let taxRate = 0.08;
let discount = 0;
if (region === "East") {
  discount = 15;
  console.log("Customer is eligible for the regional discount.");
} else {
  console.log("Customor is NOT eligible for the regional discount.");
}
let tax = subtotal * taxRate;
let FinalAmount = subtotal + tax - discount;
console.log("Subtotal", subtotal);
console.log("Tax:", tax);
console.log("Discount:", discount);
console.log("Final amount:", FinalAmount);
