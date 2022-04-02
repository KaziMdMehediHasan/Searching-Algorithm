function valueCorresponder(arr1, arr2, str) {
  let valuePos;
  for (let i = 0; i < arr1.length; i++) {
    if (str === arr1[i]) {
      valuePos = i;
    }
  }
  console.log(valuePos);
  arr2[valuePos] = true;
  return arr2;
}

console.log(
  valueCorresponder(
    ["x", "y", "z", "w", "a"],
    [false, false, false, false, false],
    "x"
  )
);
