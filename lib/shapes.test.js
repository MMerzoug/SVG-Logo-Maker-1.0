// Require dependencies
const { mockTriangle, mockCircle, mockSquare } = require("./mockShapes");



// Define function
function someFunction(module, exports, require, __dirname, __filename, jest) {
    // Your function implementation
};

// Define Shape class
class Shape {
    constructor() {
        this.color = "";
    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }
}

// Define Triangle class
class Triangle extends Shape {
    constructor() {
        super();
        this.points = [
            {x:0, y:0},
            {x: 100, y: 0},
            {x: 50, y: 100},
        ];
        this.color = "black";
    }

    render() {
        const points = this.points.map(p => `${p.x},${p.y}`).join(' ');
        return `<polygon points="${points}" fill="${this.color}"/>`;
    }
}

// Define Circle class
class Circle extends Shape {
    constructor(radius=50) { // default radius set to 50
        super();
        this.radius = radius;
        this.color = "black";
    }

    render() {
        return `<circle cx="150" cy="150" r="${this.radius}" fill="${this.color}"/>`;
    }
}

// Define Square class
class Square extends Shape {
    constructor(width=100) { // default width set to 100
        super();
        this.width = width;
        this.color = "black";
    }

    render() {
        return `<rect x="50" y="50" width="${this.width}" height="${this.width}" fill="${this.color}"/>`;
    }
}

// Export the classes
module.exports = {
    someFunction,
    Shape,
    Triangle,
    Circle,
    Square
};
