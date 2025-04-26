/*
Expectation:
    const p1 = Promise.resolve(1);
    const p1 = Promise.resolve(2);
    const p3 = 3
    await promiseAll([p0, p1, p3])) //  1,2

Eplaantion:
    - Return new promise
    - If iterable is empty, resolve with empty array
    - If iterable is not empty, loop through iterable and resolve each promise
    - If promise is resolved, update result to resolved value based in index of loop
    - If promise is rejected, reject with error
*/

export default function promiseAll<T extends readonly unknown[] | []>(
  iterable: T,
): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }> {
  return new Promise((resolve, reject) => {
    const result: unknown[] = [];
    let count = 0;
    const iterableLength = iterable.length;

    if (iterableLength === 0) {
      resolve(result as { -readonly [P in keyof T]: Awaited<T[P]> });
      return;
    }

    for (let i = 0; i < iterable.length; i++) {
      Promise.resolve(iterable[i])
        .then((value) => {
          result[i] = value;
          count += 1;
          if (count === iterableLength) {
            resolve(result as { -readonly [P in keyof T]: Awaited<T[P]> });
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
}
