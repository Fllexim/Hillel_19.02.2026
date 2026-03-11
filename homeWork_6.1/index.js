alert("Можеш написати букви і разом, і через пробіл");

const text = prompt("Please enter text:").split("");
const letters = prompt("Please enter letters to delete:").split("");

function spliceText(text, letters) {
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === " ") {
      letters.splice(i, 1);
      i--;
    }
  }

  for (let j = 0; j < letters.length; j++) {
    for (let i = 0; i < text.length; i++) {
      if (letters[j] === text[i]) {
        text.splice(i, 1);
        i--;
      }
    }
  }
  text = text.join("");
  console.log(text);
}

spliceText(text, letters);
