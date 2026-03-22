let marks = Number(prompt("enter your mark: "));
if (isNaN(marks)) {
  console.log("please enter a valid numbers");
}
if (marks >= 0 && marks <= 100) {
  if (marks >= 90) {
    console.log("Grade: A+");
  } else if (marks >= 85) {
    console.log("Grade: A");
  } else if (marks >= 80) {
    console.log("Grade: A-");
  } else if (marks >= 75) {
    console.log("Grade: B+");
  } else if (marks >= 70) {
    console.log("Grade: B");
  } else if (marks >= 65) {
    console.log("Grade: B-");
  } else if (marks >= 60) {
    console.log("Grade: C+");
  } else {
    console.log("Grade: F");
  }
} else {
  console.log("invalid input");
}
