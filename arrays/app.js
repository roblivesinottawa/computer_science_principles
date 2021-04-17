const arrMax = (arr) => Math.max(...arr);
const array = [10, 30, 49, 67, 48];
console.log(arrMax(array));

// finding the average
const findAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
const array1 = [30, 67, 78, 93, 02, 49];
console.log(findAverage(array1));

// create an array with ages of students and create a function that returns the average age of students

const arrAge = [12, 15, 13, 16, 11, 10];

const checkAverageAge = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(checkAverageAge(arrAge));
