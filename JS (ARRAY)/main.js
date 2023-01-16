const generateArrayBtn = document.getElementById("generate-array-btn");
const checkRepeatsBtn = document.getElementById("check-repeats-btn");
const arraySizeInput = document.getElementById("array-size");
const arrayOutput = document.getElementById("array-output");
let array = [];

function generateArray() {
  array = Array.from({ length: arraySizeInput.value }, () =>
    Math.floor(Math.random() * 25)
  );
  arrayOutput.innerHTML = `Array: [${array}]`;
  checkRepeatsBtn.disabled = false;
}

function checkRepeats() {
  let hasRepeats = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        hasRepeats = true;
        break;
      }
    }
    if (hasRepeats) {
      break;
    }
  }
  alert(hasRepeats);
}
