// HackerRank Problem

const grades = [4, 73, 67, 38, 33];

function gradingStudents(grades) {
  // Write your code here
  let finalGrades = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] % 5 === 3 && grades[i] > 35) {
      grades[i] = grades[i] + 2;
      finalGrades.push(grades[i]);
    } else if (grades[i] % 5 === 4 && grades[i] > 35) {
      grades[i] = grades[i] + 1;
      finalGrades.push(grades[i]);
    } else {
      finalGrades.push(grades[i]);
    }
  }
  return finalGrades;
}

console.log(gradingStudents(grades));
