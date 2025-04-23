/*
[1,2,3,4,5].reduce((acc, cur) => acc + cur) => 15

explanation:
  initialValue = 0
  acc  = 0, 1, 3, 6, 10 
  curr = 1, 2, 3, 4, 5
  0+1, 1+2, 3+3, 6+4, 10+15
  res  = 1, 3, 6, 10, 15

  without initialValue => acc start from index 0 and curr from index 1
  acc  = 1, 3, 6, 10
  curr = 2, 3, 4, 5
  1+2, 3+3, 6+4, 10+5
  res  = 3, 6, 10, 15
*/

Array.prototype.myReduce = function (callbackFn, initialValue) {
  const noInitialValue = initialValue === undefined;
  const length = this.length;

  if (noInitialValue && length === 0) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let acc = noInitialValue ? this[0] : initialValue;
  const startingIndex = noInitialValue ? 1 : 0;

  for (let k = startingIndex; k < length; k++) {
    if (Object.hasOwn(this, k)) {
      acc = callbackFn(acc, this[k], k, this);
    }
  }

  return acc;
};

const arr = [1, 2, 3, 4, 5];
const sum = arr.myReduce(
  (previousValue: number, currentValue) => previousValue + currentValue,
);
console.log(sum);

const reduce = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
);

console.log(reduce);
