// class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(str) {
        this.greeter = str;
    }
    Greeter.prototype.greet = function () {
        return 'Hello ' + this.greeter;
    };
    return Greeter;
}());
var greeters = new Greeter('world');
greeters.greet();
var Animals = /** @class */ (function () {
    function Animals(name) {
        this.name = name;
    }
    Animals.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " move " + distance + "m");
    };
    return Animals;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log('Slightering...');
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animals));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 40; }
        console.log('dadada...');
        _super.prototype.move.call(this, distance);
    };
    return Horse;
}(Animals));
var sam = new Snake('sammy');
var tom = new Horse('tommy');
sam.move();
tom.move();
