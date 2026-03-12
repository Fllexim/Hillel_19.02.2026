alert("Можеш написати букви і разом, і через пробіл");

const text = prompt("Please enter text:").split("");
const letters = [
    ...new Set(
    prompt("Please enter letters to delete:")
    .replaceAll(" ", "")
    .split("")
  )
];

function spliceText(text, letters) {
  for (let j = 0; j < letters.length; j++) {
    for (let i = 0; i < text.length; i++) {
      if (letters[j] === text[i]) {
        text.splice(i, 1);
        i--;
      }
    }
  }

  const results = text.join("");
  console.log(results);
}

spliceText(text, letters);
