let company = {
  sales: [
    { name: `John`, salary: 1000 },
    { name: `Alice`, salary: 600 },
  ],
  development: {
    web: [
      { name: `Peter`, salary: 2000 },
      { name: `Alex`, salary: 1000 },
    ],
    internals: [
      { name: `Jack`, salary: 1300 }
    ],
  },
};

function sumTotalSalary(department) {
  if (Array.isArray(department)) {
    let sum = 0;

    for (const person of department) {
      sum += person.salary;
    }

    return sum;
  }

  let sum = 0;

  for (const key in department) {
    sum += sumTotalSalary(department[key]);
  }

  return sum;
}

console.log(sumTotalSalary(company));