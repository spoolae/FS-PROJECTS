function calculate() {
  let x = parseInt(document.getElementById("x").value);
  let y = parseInt(document.getElementById("y").value);
  let res;

  if (x > 0 && y > 0) {
    res = x * y;
    alert(res);
  } else if (x < 0 && y < 0) {
    res = x * y;
    alert(res);
  } else if ((x > 0 && y < 0) || (x < 0 && y > 0)) {
    res = x / y;
    alert(res);
  } else if (x === 0 || y === 0) {
    res = x || y;
    alert(res);
  } else {
    alert(NaN);
  }

  if (res) {
    if (res <= 0 || res % 4 !== 0 || res % 7 !== 0) {
      alert("Lose");
    } else {
      alert("Win - Число додатнє, парне, кратне 4 і 7 одночасно");
    }
  }
}
