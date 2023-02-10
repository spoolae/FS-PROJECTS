function getFullName(fullName) {
  const [surname, ...rest] = fullName.split(" ");
  return [surname, ...rest.map((part) => part[0].toUpperCase() + ".")].join(
    " "
  );
}

function showFullName() {
  let fullName = document.getElementById("fullName").value;
  let result = getFullName(fullName);
  document.getElementById("result").innerHTML = result;
}
