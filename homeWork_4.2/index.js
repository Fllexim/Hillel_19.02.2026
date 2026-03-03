const userNumbers = prompt("Введіть трьохзначне число:");

if (userNumbers && userNumbers.length === 3) {
  if (userNumbers[0] === userNumbers[1] &&
      userNumbers[1] === userNumbers[2])
      {
    console.log("Всі цифри однакові");
  } else {
    console.log("Не всі цифри однакові");
  }

  if (
    userNumbers[0] === userNumbers[1] ||
    userNumbers[1] === userNumbers[2] ||
    userNumbers[0] === userNumbers[2]
  ) {
    console.log("Є однакові цифри");
  } else {
    console.log("Немає однакових цифр");
  }
} else {
  alert("Введіть саме трьохзначне число!");
}
