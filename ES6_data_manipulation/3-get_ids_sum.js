export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) return 0;

  return students.reduce((total, student) => {
    if (student && typeof student.id === 'number') {
      return total + student.id;
    }
    return total; 
  }, 0);
}
