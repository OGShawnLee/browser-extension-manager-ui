/**
 * Conditionally replaces placeholders in a string.
 * Each replacement has an on and off className and a condition that determines which className to use:
 * on if the condition is true, off otherwise.
 * @param str The input string
 * @param args The replacement arguments
 * @returns The modified string
 */
export function c(str: string, ...args: { on: string, off: string, condition: boolean }[]) {
  return str.replaceAll(/\{(\d+)\}/g, (match, index) => {
    const arg = args[index];
    return arg ? (arg.condition ? arg.on : arg.off) : match;
  });
}