// Base class for all shapes.
class Shape {
    constructor() {
        // Set a default color
        this.color="";
    }
    
    // Method to set color for a shape
    setColor(colorChoice) {
        this.color = colorChoice;
    }
}

// Triangle is a Shape
class Triangle extends Shape {
    constructor() {
        super();
        // Set points for triangle vertices
        this.points = [
            {x:0, y:0},
            {x: 100, y: 0},
            {x: 50, y: 100},
        ];
        // Default color for triangle
        this.color = "black";
    }

    // Method to render the Triangle as an SVG polygon
    render() {
        return `<polygon points="${this.points.map(point => `${point.x},${point.y}`).join(' ')}" fill="${this.color}"/>`;
    }
}

// Circle is a Shape
class Circle extends Shape {
    constructor(radius=50) { // Default radius is 50
        super();
        this.radius = radius;
        // Default color for circle
        this.color = "black";
    }

    // Method to render the Circle as an SVG circle
    render() {
        return `<circle cx="150" cy="150" r="${this.radius}" fill="${this.color}"/>`;
    }
}

// Square is a Shape
class Square extends Shape {
    constructor(width=100) { // Default width is 100
        super();
        this.width = width;
        // Default color for square
        this.color = "black";
    }
    
    // Method to render the Square as an SVG rect
    render() {
        return `<rect x="50" y="50" width="${this.width}" height="${this.width}" fill="${this.color}"/>`;
    }
}

// Export the classes for use in other files
module.exports = {Triangle, Circle, Square};
