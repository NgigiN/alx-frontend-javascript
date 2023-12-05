export default function getListStudentsIds(args) {
  if (!Array.isArray(args)) {
    return [];
  }
  return Array.map((student) => student.id);
}
