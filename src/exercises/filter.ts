declare global {
  interface Array<T> {
    myFilter(
      callbackFn: (value: T, index: number, array: Array<T>) => boolean,
      thisArg?: unknown,
    ): Array<T>;
  }
}

Array.prototype.myFilter = function (callbackFn, thisArg) {
  const len = this.length;
  const results = [];

  for (let i = 0; i < len; i++) {
    const kValue = this[i];
    if (
      Object.prototype.hasOwnProperty.call(this, i) &&
      callbackFn.call(thisArg, kValue, i, this)
    ) {
      results.push(kValue);
    }
  }

  return results;
};

const arr = [1, 2, 3, 4, 5];
const asd = arr.myFilter((item) => item > 2); // [3, 4, 5]
console.log(asd);
