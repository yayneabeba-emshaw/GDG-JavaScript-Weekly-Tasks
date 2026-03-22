const calculate = (numbers = []) => {
  if (numbers.length === 0) {
    console.log("Array is empty");
    return;
  }
  const [first, ...rest] = numbers;
  const last = numbers[numbers.length - 1];
  const sum = numbers.reduce((total, num) => total + num, 0);
  const max = Math.max(...numbers);

  return {
    sum,
    max,
    first,
    last,
  };
};
const result = calculate([5, 10, 15, 20]);

console.log(result);
