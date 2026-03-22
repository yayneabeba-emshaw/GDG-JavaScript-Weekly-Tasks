let username = prompt("Enter Your Username: ");
let password = prompt("Enter Your Password: ");
if (username === "" || password === "") {
  console.log("please enter a valid inputs");
}
 else if (username === "admin" && password === "1234") {
  console.log("Login Successful");
} else {
  console.log("Invalid Credentials");
}
