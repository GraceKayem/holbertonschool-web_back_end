export default function getStudentIdsSum(students) {
  let sum = 0;
    return students.reduce((total, student) => total + student.id, sum);

}
