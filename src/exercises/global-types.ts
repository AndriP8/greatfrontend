declare global {
  interface Array<T> {
    myFilter(
      callbackFn: (value: T, index: number, array: Array<T>) => boolean,
      thisArg?: unknown,
    ): Array<T>;
  }

  interface Array<T> {
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
}
