export function c(str: string, ...args: { on: string, off: string, condition: boolean }[]) {
  return str.replaceAll(/\{(\d+)\}/g, (match, index) => {
    const arg = args[index];
    return arg ? (arg.condition ? arg.on : arg.off) : match;
  });
}