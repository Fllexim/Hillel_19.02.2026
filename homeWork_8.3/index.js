function getNumber() {
  let userNum;

  for (let i = 0; i < 10; i++) {
    userNum = +prompt("Please enter number > 100");

    if (userNum > 100) {
      console.log(userNum);
      return;
    }
  }

  console.log(userNum);
}

getNumber();