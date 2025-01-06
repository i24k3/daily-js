
let studentMarks = [
    85, 
    97, 
    44, 
    37, 
    76, 
    60, 
];

function getAverage(sum, ofnumbers) {
  return sum /ofnumbers;
}

function sumArray(array) {
  
  let sum = 0;
  for (element of array) {
    sum += element;
  }
  return sum;
}

const avg = getAverage(
  sumArray(studentMarks), 
  studentMarks.length);

console.log(avg);
