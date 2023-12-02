export default function guardrail(mathfunction) {
  const queue = [];

  try {
    queue.push(mathfunction());
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
