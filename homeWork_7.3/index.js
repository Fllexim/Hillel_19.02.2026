const array = [1, 3, 4, 6, 2, 5, 7];

removeElement(array, 4);

function removeElement(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      arr.splice(i, 1);
      break;
    } 
  }
  console.log(arr);
}

