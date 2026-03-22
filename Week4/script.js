let input = document.getElementById("name");
let btn = document.getElementById("btn");
let TaskLists = document.getElementById("lists");
const colors = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];
btn.addEventListener("click", () => {
  let tasks = input.value.trim();
  if (tasks === "") {
    alert("please enter a task");
    return;
  }
  let li = document.createElement("li");
  li.textContent = tasks;
  const color = colors[Math.floor(Math.random() * colors.length)];
  li.style.backgroundColor = color;
  li.addEventListener("click", () => {
    li.remove();
  });
  TaskLists.appendChild(li);
  input.value = "";
});
