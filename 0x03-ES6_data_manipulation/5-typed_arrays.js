export default function create8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8Array = new int8Array(buffer);
  int8Array[position] = value;

  return buffer;
}
