export default function getListStudentsIds(...args) {
  const ids = args.flat().map((obj) => obj.id);
  return ids;
}
