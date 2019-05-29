interface TimeClock {
  currentTime: Date;

  say(time: string)
}

class Clock implements TimeClock {
  currentTime: Date;

  constructor(h: string, m: string) {

  }

  say(time) {
    this.currentTime = time;
  }
}

interface Shape {
  src: string;
}

interface Shape1 {
  dst: number;
}

interface Shape2 extends Shape, Shape1 {
  hh: number;
}

let myShape = {} as Shape2;
myShape.dst = 12;
myShape.hh = 12;
myShape.src = 'dfsf';

class Control {
  private state: any;
}

interface SelectableCtrol extends Control {
  select()
}

class Button extends Control implements SelectableCtrol {
  select() {}
}

class TextBox extends Control {
  select() {}
}

class ImageC extends Control implements SelectableCtrol {
  select() {}
}