function checkNumberWhile() {
  let i = 0;
  while (i < 3) {
    let num = prompt("Введіть число");
    if (num > 15 && num < 35 && num % 6 === 0) {
      alert("Число підходить!");
      break;
    } else {
      i++;
      if (i < 3) {
        alert("Спробуйте ще раз. Залишилось спроб:  " + (3 - i));
      } else {
        alert("Спроби закінчились!");
      }
    }
  }
}

function checkNumberFor() {
  for (let i = 0; i < 3; i++) {
    let num = prompt("Введіть число");
    if (num > 15 && num < 35 && num % 6 === 0) {
      alert("Число підходить!");
      break;
    } else {
      if (i < 2) {
        alert("Спробуйте ще раз. Залишилось спроб:  " + (2 - i));
      } else {
        alert("Спроби закінчились!");
      }
    }
  }
}
