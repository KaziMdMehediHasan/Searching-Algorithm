function returnUniqueArray(arr) {
  let obj = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  for (const key in obj) {
    result.push(key);
  }
  return result;
}

console.log(returnUniqueArray(["a", "b", "x", "z", "a", "b", "c"]));
