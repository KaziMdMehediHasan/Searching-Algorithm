// To implement binary search the array must be sorted
// faster than linear search
// Rather than elimiating one element at a time , it can eliminate half of the remaining elements at a time

// Methodology : Divide and Conquer

// Binary Search Pseudocode
/*
 *This functions accepts a sorted array and a value.
 *Create a left pointer at the start of the array, and a right *pointer at the end of the array.
 * 0 index is the left pointer and end of the array is the right pointer.
 * Pick a middle pointer
 * While the left pointer comes before the right pointer:
 ** Create a pointer in the middle.
 ** If you find the value you want , return the index.
 **If the value is too small, move the left pointer up.
 **If the value is too large, move the right pointer down.
 * If you never find the value , return -1
 */

let givenArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

function binarySearch(arr, value) {
  // setting the lest pointer at the start of the array
  let left = 0;
  // setting the left pointer at the end of the array
  let right = arr.length - 1;
  // picking the middle of the array for even and odd number of elements
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    //   If the value is too small, move the left pointer up.
    if (arr[mid] < value) {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
    }
    // If the value is too large, move the right pointer down.
    else if (arr[mid] > value) {
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
    } else {
      return mid;
    }
  }

  // If you never find the value , return -1
  return -1;
}

// console.log(binarySearch(givenArr, 15));
console.log(binarySearch([2, 6, 25, 89, 100, 110, 120, 127, 150], 2));
