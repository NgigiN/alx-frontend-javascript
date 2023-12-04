export default function updateUniqueItems(maps) {
  if (!(maps instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of maps) {
    if (value === 1) {
      maps.set(key, 100);
    }
  }
  return maps;
}
