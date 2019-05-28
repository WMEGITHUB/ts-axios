function createSquare(config) {
    var newSquare = { color: 'red', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
createSquare({ color: 'blue' });
var point = { x: 10, y: 12 };
var av = [1, 2];
var ro = av;
ro.push(1);
