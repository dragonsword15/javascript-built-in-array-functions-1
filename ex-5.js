const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let m = students.reduce((acc, crr) => {
    return acc + crr.score
  },0)
    return m / students.length
}

let m = getAverageStudentScore(students); // Output: 87.5
console.log(m)
