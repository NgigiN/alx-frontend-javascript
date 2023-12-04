export default function updateStudentGradeByCity(student, city, ...newGrades) {
  const students = student.filter((student) => student.location === city);
  const ids = students.map((student) => student.id);
  const newStudents = student.map((student) => {
    if (ids.includes(student.id)) {
      const grade = newGrades.filter((grade) => grade.studentId === student.id);
      return { ...student, grade: grade[0] ? grade[0].grade : 'N/A' };
    }
    return student;
  });
  return newStudents;
}
