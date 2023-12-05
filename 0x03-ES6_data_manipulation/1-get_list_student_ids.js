export default function getListStudentsIds(args) {
  if (!Array.isArray(args)) {
    return [];
  }
  return args.map((student) => student.id);
}
