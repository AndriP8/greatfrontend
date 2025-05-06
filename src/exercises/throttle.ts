type ThrottleFunction<T extends unknown[]> = (...args: T) => unknown;

export default function throttle<T extends unknown[]>(
  func: ThrottleFunction<T>,
  wait: number,
): ThrottleFunction<T> {
  let isThrottled = false;

  return function (this: unknown, ...args: T) {
    if (isThrottled) return;

    isThrottled = true;
    setTimeout(function () {
      isThrottled = false;
    }, wait);
    func.apply(this, args);
  };
}
