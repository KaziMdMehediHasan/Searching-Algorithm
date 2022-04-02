function isSymmetric(str) {
  let reverseString = "";

  for (let i = 0; i < str.length; i++) {
    reverseString = str[i] + reverseString;
  }
  if (str === reverseString) {
    return true;
  } else {
    return false;
  }
}

console.log(isSymmetric("bob"));
