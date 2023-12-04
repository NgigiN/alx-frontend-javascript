export default function cleanSet(inputSet, startString) {
  const filteredValues = Array.from(inputSet).filter((value) => value.startString(startString));
  const resultString = filteredValues.join('-');
  return resultString;
}
