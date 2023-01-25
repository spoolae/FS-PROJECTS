const minMax = (arr) => {
  if (arr.length === 0) return [];
  let min = arr[0],
    max = arr[0];
  for (let val of arr) {
    if (val < min) min = val;
    if (val > max) max = val;
  }
  return [min, max];
};

const multiply = (...args) => {
  if (args.length === 0) return null;
  let result = 1;
  for (let val of args) {
    result *= val;
  }
  return result;
};

const askUser = (question) => {
  const userInput = confirm(question);
  return userInput ? "ok" : "error";
};

console.log(minMax([-10, 20, 30, -25, 40, 50, -15]));
// Result: [-25, 50]
console.log(minMax([-10, 0, 10, 20, 30]));
// Result: [-10, 30]
console.log(minMax([]));
// Result: []

console.log(multiply(2, 3, 4, 5, 6));
// Result: 720
console.log(multiply(1, 2));
// Result: 2
console.log(multiply(5, 2, 1, 7, 8, 9));
// Result: 5040

console.log(askUser("Answer the question"));
// Result: ok or error
