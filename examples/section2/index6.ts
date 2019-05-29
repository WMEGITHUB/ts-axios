function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('myString');

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

interface GenericIdetity<T> {
  (arg: T): T;
}

let myIdentity: GenericIdetity<string> = identity;

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = {'a': 1, 'b': 2};

getProperty(x, 'a');