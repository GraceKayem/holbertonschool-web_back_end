export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) return [];

  return students
    .filter(student => student && student.location === city)
    .map(student => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location
    }));
}