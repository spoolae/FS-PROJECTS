function compare(str1, str2) {
  return (
    str1.length === str2.length &&
    str1
      .toLowerCase()
      .split("")
      .every((char) => str2.toLowerCase().includes(char))
  );
}

function getResult() {
  const result = compare(
    document.getElementById("str1").value,
    document.getElementById("str2").value
  );
  const output = document.getElementById("output");
  output.textContent = result ? "True" : "False";
}
