let isDone: boolean = true;
let isNumber: number = 1;
let isString: string = '1';
let isArray: number[] = [1, 2, 3];
let isArray2: Array<number> = [1, 2, 3];
let isTuple: [string, number]
isTuple = ['1', 1];

enum Color {
  green = 1,
  red,
  blue,
}

let colorName: string = Color[1];

console.log(colorName);

let num: number | null = 3;
num = null;

declare function create(a: object | null): void;
create({prop: true}); 

let someStr: any = 'this is a string';

// let len = (<string>someStr).length;

let len = (someStr as string).length;