/*
Expectation: 
  const obj = {
    name: 'John',
    sayHi() {
      console.log(this.name);
    }
  }
  const bound = obj.sayHi.myBind(obj);
  bound(); // John
Explanation:
  The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
*/

/* eslint-disable @typescript-eslint/no-explicit-any */
Function.prototype.myBind = function (thisArg, ...argArray) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const originalMethod = this;
  if (typeof originalMethod !== "function") {
    throw new TypeError("Bind must be called on a function");
  }
  return function (...args: any[]) {
    console.log(originalMethod, "asd");
    return Reflect.apply(originalMethod, thisArg, [...argArray, ...args]);
  };
};
