interface Square {
  color: string,
  area: number,
}

interface SquareConfig {
  color?: string,
  width?: number,
}

function createSquare(config: SquareConfig): Square {
  let newSquare = {color: 'red', area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

createSquare({color: 'blue'})

interface Point {
  readonly x: number,
  readonly y: number,
}

let point: Point = {x: 10, y: 12}

let av: number[] = [1, 2];
let ro: ReadonlyArray<number> = av;

interface Search {
  (source: string, subStr: string): boolean
}

let mySearch: Search;
mySearch = function(src, sub) {
  let result = src.search(sub);
  return result > -1;
}

class Animal {
  name: string;
}

class Dog extends Animal {
  bread: string;
}

interface NotOkay {
  [x: number]: Dog;
  [x: string]: Animal;
}

interface ReadonlyStringArray {
  readonly [x: number]: string;
}

let myArray: ReadonlyStringArray = ['a', 'b'];
