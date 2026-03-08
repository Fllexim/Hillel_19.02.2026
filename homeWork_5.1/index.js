let results = "";

for (let i = 20; i < 30; i += 0.5) {
  results += i + 0.51 <= 30 ? `${i}, ` : i; // 0.51 из-за проблемы js с работой дробных чисел в циклах
}

console.log(results);
