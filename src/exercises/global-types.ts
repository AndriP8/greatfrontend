declare global {
  interface Array<T> {
    myFilter(
      callbackFn: (value: T, index: number, array: Array<T>) => boolean,
      thisArg?: unknown,
    ): Array<T>;
    myReduce<U>(
      callbackFn: (
        previousValue: U,
        currentValue: T,
        currentIndex: number,
        array: T[],
      ) => U,
      initialValue?: U,
    ): U;
  }

  interface Function {
    myBind(this: Function, thisArg: unknown, ...argArray: unknown[]): Function;
  }
}
