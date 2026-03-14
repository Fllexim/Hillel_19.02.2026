let textUser = prompt("Enter your text:").split("");

removeNumbers(textUser)

function removeNumbers(text) {
    text = text.filter(!Number).join("");
    
    console.log(text);
}