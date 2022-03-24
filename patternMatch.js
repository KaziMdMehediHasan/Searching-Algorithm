// naive solution
function patternMatch(str, pattern) {
  // checking for the pattern length
  let length = pattern.length; //3
  // main loop starts from the index 0
  for (let i = 0; i < str.length - length + 1; i++) {
    // a variable to concatenate the number of character as the pattern length
    let tempStr = "";
    // secondary loop is on the patterns length
    for (let j = 0; j < length; j++) {
      // this line will add each consequent strings upto pattern length index and store inside the tempStr variable
      tempStr += str[i + j];
    }
    // console.log(tempStr);
    // Now we will check if the tempStr matches the pattern
    if (pattern === tempStr) {
      return true;
    } else {
      continue;
    }
  }
  // if the loop ends without matching then we will return false
  return false;
}

// console.log(patternMatch("Hello World", "He"));
console.log(patternMatch2("Hello World", "World"));
