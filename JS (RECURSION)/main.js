function pairBrickets(n) {
  if (typeof n !== "number") throw new Error("The argument must be a number");
  if (n <= 1) return "( )";
  return "(" + pairBrickets(n - 1) + ")";
}

try {
  console.log(pairBrickets(4));
  // Result: (((( ))))
  console.log(pairBrickets(-4));
  // Result: ( )
  console.log(pairBrickets("qwe"));
  // Result: The argument must be a number
} catch (e) {
  console.log(e.message);
}

function getDivider(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return getDivider(num2, num1 % num2);
}

console.log(getDivider(24, 15));
// Result: 3
console.log(getDivider(3, 3));
// Result: 3
console.log(getDivider(7, 3));
// Result: 1
