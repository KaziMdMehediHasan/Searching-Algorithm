function isUnique(str) {
  let obj = {};
  // handling the edge case
  if (str === "") {
    return "Invalid String";
  }
  for (i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else {
      return false;
    }
  }
  return true;
}

// uniqueWord('Hello');

console.log(isUnique("Type"));
