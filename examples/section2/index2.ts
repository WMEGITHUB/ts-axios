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
ro.push(1)