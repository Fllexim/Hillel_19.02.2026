const num = +prompt('Please enter number:');

for (let i = 1; i < 100 && i ** 2 <= num; i++) {
    console.log(i);
}