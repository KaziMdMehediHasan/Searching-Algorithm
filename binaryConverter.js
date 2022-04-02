function binaryConverter(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 || arr[i] === 0) {
      newArr.push(1);
    } else {
      newArr.push(0);
    }
  }
  return newArr;
}

console.log(binaryConverter([2, 3, 1, 0, 5]));
