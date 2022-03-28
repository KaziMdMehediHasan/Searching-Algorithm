let sentence = "Allah is the almighty.There is no one like him.";

function wordCount(str) {
  let count = 0;
  for (let char of str) {
    if (char === " " || char === ".") {
      count++;
    }
  }
  return count;
}

console.log(wordCount(sentence));
