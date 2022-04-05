// The red region denotes the house, where is the start point, and
// is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
// Assume the trees are located on a single point, where the apple tree is at point
// , and the orange tree is at point
// .
// When a fruit falls from its tree, it lands
// units of distance from its tree of origin along the -axis. *A negative value of means the fruit fell units to the tree's left, and a positive value of means it falls units to the tree's right. *

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleOnTheHouse = [];
  let orangesOnTheHouse = [];

  //to calculate apple's fall
  for (let i = 0; i < apples.length; i++) {
    let tempArr = 0;
    tempArr = a + apples[i];
    if (tempArr >= s && tempArr <= t) {
      appleOnTheHouse.push(tempArr);
    }
  }
  //to calculate orange's fall
  for (let i = 0; i < oranges.length; i++) {
    let tempArr = 0;
    tempArr = b + oranges[i];
    if (tempArr >= s && tempArr <= t) {
      orangesOnTheHouse.push(tempArr);
    }
  }

  console.log(appleOnTheHouse.length);
  console.log(orangesOnTheHouse.length);
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
