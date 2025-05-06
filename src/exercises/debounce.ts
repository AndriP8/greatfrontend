/*
  Expectation:
    Write a debounce function that accepts a function and a timeout time in milliseconds. It should return a new function that will only execute the original function at most once per wait period.
  Explanation:
    - debounce function accepts a function and a timeout time in milliseconds
    - It should return a new function that will only execute the original function at most once per wait period by clearing the timeout before executing the function
*/

const debounce = function (func: Function, wait: number = 0): Function {
  let timeout: NodeJS.Timeout;

  return function (...args: unknown[]): void {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

export default debounce;
