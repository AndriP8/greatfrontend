export default function debounce(fn: Function, wait: number): Function {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...args: unknown[]) {
    clearTimeout(timeoutId || undefined);

    timeoutId = setTimeout(() => {
      timeoutId = null;
      fn.apply(this, args);
    }, wait);
  };
}

const log = debounce(function () {
  console.log("hello");
}, 1000);
log();
