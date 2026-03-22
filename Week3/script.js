let students = [];
let input = document.getElementById("name");
let btn = document.getElementById("btn");
let studentname = document.getElementById("student");
btn.addEventListener("click", () => {
  let name = input.value.trim();
  if (name === "") {
    alert("please enter a name");
    return;
  }
  students.push(name);
  input.value = "";

  studentname.innerHTML =
    "<strong>Registered students:</strong> <br>" + students.join(" <br> ");
});
