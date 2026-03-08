const num = +prompt('Please enter number:');

let i = 2;

while (i * i <= num && num % i !== 0) {
  i++;
}

console.log(i * i > num && num > 1 ? "Просте" : "Не просте");