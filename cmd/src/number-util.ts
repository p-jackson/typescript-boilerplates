export function add(a: number, b: number): number {
  return a + b;
}

export function validate(s: string) {
  return /^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(s)
}
