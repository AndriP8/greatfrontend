/*
const object = { a: [{ b: { c: 3 } }] };
expectation:
    get(object, "a[0].b.c") => 3
    get(object, ["a", "0", "b", "c"]) => 3
    get(object, "a.b.c", "default") => default

explanation:
    -. Separate path to array based on level of object using split
    -. Loop through path array and return based on object index from key
    -. If object is empty or key is not found, return default value
    -. If path is found, return object based on key from looping
*/

export default function get<T>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  objectParam: Record<string, any>,
  pathParam: string | Array<string>,
  defaultValue?: T,
): T {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split(".");
  let current = objectParam;
  for (const key of path) {
    if (
      !current ||
      !Object.keys(current).length ||
      current[key] === undefined
    ) {
      return defaultValue as T;
    }
    current = current[key];
  }
  return current as T;
}
