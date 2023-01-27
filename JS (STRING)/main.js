const vowels = ["a", "e", "i", "u", "o", "y"];

function countVowels_regular(str) {
  let count = 0;
  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (vowels.includes(char)) count++;
    });
  return count;
}

const countVowels_arrow = (str) =>
  str
    .toLowerCase()
    .split("")
    .filter((char) => vowels.includes(char)).length;

function countVowels() {
  const input = document.getElementById("input").value;
  alert("Кількість голосних (звичайна функція): " + countVowels_regular(input));
  alert("Кількість голосних (стрілкова функція): " + countVowels_arrow(input));
}
