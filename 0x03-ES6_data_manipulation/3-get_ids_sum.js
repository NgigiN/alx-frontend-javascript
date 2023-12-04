export default function getStudentIdsSum(students) {
  return students.reduce((res, student) => res + student.id, 0);
}
