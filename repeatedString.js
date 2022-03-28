function repeatedString(s, n) {
  // Write your code here
  // first we need to know the length of the string
  let length = s.length;
  // then we will count the num of "a" in one repeat
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      count++;
    }
  }
  // after getting the number of "a" in one repeat we have to figure out the total number of repeat. To determine that we have to divide the number with the length of the string

  let numOfRepeat = parseInt(n / length);
  // now we have to calculate the number of length that is remaining to be counted. To do that we will substract the total character covered (numOfRepeat * length) from the given repeat number

  let remainingRepeat = n - numOfRepeat * length;

  let extraCount = 0;
  for (let i = 0; i < remainingRepeat; i++) {
    if (s[i] === "a") {
      extraCount++;
    }
  }

  let totalCount = numOfRepeat * count + extraCount;
  return totalCount;
}

console.log(repeatedString("abcac", 10));
console.log(repeatedString("aba", 10));

// abaabaabaa  a is repeated found 7 times
