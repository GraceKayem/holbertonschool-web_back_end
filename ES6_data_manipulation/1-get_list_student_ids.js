export default function getListStudentIds(students) {
  if (!Array.isArray(students)) return [];

  return students
    .filter(student => student && typeof student.id === 'number')
    .map(student => student.id);
}
