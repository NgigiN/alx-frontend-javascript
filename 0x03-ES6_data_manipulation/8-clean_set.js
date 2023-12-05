export default function cleanSet(inputSet, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') return '';

  let outputString = '';
  inputSet.forEach((element) => {
    if (element && element.startsWith(startString)) outputString += `${element.slice(startString.length)}-`;
  });
  return outputString.slice(0, outputString.length - 1);
}
