// class

class Greeter {
  greeter: string;

  constructor(str: string) {
    this.greeter = str;
  }

  greet() {
    return 'Hello ' + this.greeter;
  }
}

let greeters = new Greeter('world');
greeters.greet();

class Animals {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(distance: number = 0) {
    console.log(`${this.name} move ${distance}m`);
  }
}

class Snake extends Animals {
  constructor(name) {
    super(name);
  }
  move(distance: number = 5) {
    console.log('Slightering...');
    super.move(distance);
  }
}

class Horse extends Animals {
  constructor(name) {
    super(name);
  }
  move(distance: number = 40) {
    console.log('dadada...');
    super.move(distance);
  }
}

let sam = new Snake('sammy');
let tom: Animals = new Horse('tommy');
sam.move();
tom.move();