let array = [8, "2", null, undefined, 5, NaN, 4, {}, [], 7];

avgSumNumbers(array);

function avgSumNumbers(array) {
    const numbers = array.filter(Number.isFinite);
    const avgSum = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    console.log(avgSum);
}

/* Изначально написал с проверкой и сравнением, а потом узнал про фильтр

const array = [8, "2", null, undefined, 5, NaN, 4, {}, [], 7];

avgSumNumbers(array);

function avgSumNumbers(array) {
  let numbers = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && !Number.isNaN(array[i])) {
        numbers.push(array[i]);
    }
  }
  let avgNumbers = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  
  console.log(avgNumbers);
} */