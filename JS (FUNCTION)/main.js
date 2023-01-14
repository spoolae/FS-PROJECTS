function checkOddEven(num) {
  if (num != 0 && num) {
    if (num % 2 === 0) alert("Число " + num + " є парним");
    else alert("Число " + num + " не є парним");
  } else {
    alert("Число дорівнює нулю");
  }
}

function checkMax(x, y) {
  if (typeof x === typeof y) {
    if (x > y) alert("Більше значення - " + x);
    else if (x < y) alert("Більше значення - " + y);
    else alert("Значення однакові");
  } else alert("Типи значень різні");
}

function compare() {
  let xType = document.querySelector('input[name="xType"]:checked').value;
  let yType = document.querySelector('input[name="yType"]:checked').value;

  let xValue;
  if (xType === "string") {
    xValue = document.getElementById("xValueString").value;
  } else if (xType === "number") {
    xValue = parseInt(document.getElementById("xValueNumber").value);
  } else if (xType === "boolean") {
    xValue = document.getElementById("xValueBoolean").value === "true";
  } else if (xType === "null") {
    xValue = null;
  } else if (xType === "undefined") {
    xValue = undefined;
  }

  let yValue;
  if (yType === "string") {
    yValue = document.getElementById("yValueString").value;
  } else if (yType === "number") {
    yValue = parseInt(document.getElementById("yValueNumber").value);
  } else if (yType === "boolean") {
    yValue = document.getElementById("yValueBoolean").value === "true";
  } else if (yType === "null") {
    yValue = null;
  } else if (yType === "undefined") {
    yValue = undefined;
  }

  checkMax(xValue, yValue);
}
