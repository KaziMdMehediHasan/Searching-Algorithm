function compress(str) {
  let obj = {};
  // handling the edge case
  if (str === "") {
    return "Invalid String";
  }
  for (i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  //   console.log(obj);
  const keys = Object.keys(obj);
  let result = "";
  for (i = 0; i < keys.length; i++) {
    result += keys[i] + obj[keys[i]];
  }
  //   console.log(result);
  return result;
}

console.log(compress("aabbbccde"));
