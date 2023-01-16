const checkRepeatsBtn = document.getElementById("check-repeats-btn");
const arraySizeInput = document.getElementById("array-size");
const arrayOutput = document.getElementById("array-output");
let array = [];

function generateArray() {
  array = Array.from({ length: arraySizeInput.value }, () =>
    Math.floor(Math.random() * 25)
  );

  let arrayString = "Array: [";
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1] || array[i] === array[i - 1]) {
      arrayString += `<span style="color: red;">${array[i]}</span>,`;
    } else {
      arrayString += `${array[i]},`;
    }
  }

  if (array.length > 0) {
    arrayString = arrayString.slice(0, -1);
  }

  arrayString += "]";
  arrayOutput.innerHTML = arrayString;
  checkRepeatsBtn.disabled = false;
}

function checkRepeats() {
  let hasRepeats = false;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      hasRepeats = true;
      break;
    }
  }
  alert(hasRepeats);
}
