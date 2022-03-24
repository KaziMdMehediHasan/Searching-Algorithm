function maxSubArraySum(arr, num) {
  // we first declare a variable with a maximu sum of numbers
  let maxSum = 0;
  // we also declare a variable with a temporary number
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - num];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    } else {
      continue;
    }
  }
  return maxSum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
