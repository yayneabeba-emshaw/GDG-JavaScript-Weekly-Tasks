let totalSum = 0;
let oddCount = 0;
let evenCount = 0;
function checkOddEven(num) {
  if (num % 2 === 0) {
    evenCount++;
    return "Even";
  } else {
    oddCount++;
    return "Odd";
  }
}

function checkDivisibility(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both 3 and 5";
  } else if (num % 3 === 0) {
    return "Divisible by 3";
  } else if (num % 5 === 0) {
    return "Divisible by 5";
  } else {
    return "Not divisible by 3 or 5";
  }
}

function addToSum(num) {
  totalSum += num;
}
function processNumbers() {
  for (let i = 5; i <= 15; i++) {
    console.log("Number:", i);

    let type = checkOddEven(i);
    console.log("Type:", type);

    let divisible = checkDivisibility(i);
    console.log(divisible);

    addToSum(i);
    console.log("-------------------");
  }

  console.log("FINAL RESULTS");
  console.log("Total Sum:", totalSum);
  console.log("Odd Numbers Count:", oddCount);
  console.log("Even Numbers Count:", evenCount);
}
