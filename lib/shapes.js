class Shape{
    constructor() {
        this.color="";
    }
    setColor(colorChoice) {
        this.color = colorChoice;
    }
}
    
    
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
        return `<polygon points="${this.points.map(point => `${point.x},${point.y}`).join(' ')}" fill="${this.color}"/>`;
      }
  }

class Circle extends Shape {
constructor(radius=50) {
super();
this.radius = radius;
this.color = "black";
}

render() {
    return `<circle cx="150" cy="150" r="${this.radius}" fill="${this.color}"/>`;
  }
}

class Square extends Shape {
    constructor(width=100) {
    super();
    this.width = width;
    this.color = "black";
    }
    
    render() {
        return `<rect x="50" y="50" width="${this.width}" height="${this.width}" fill="${this.color}"/>`;
      }
    }
    
module.exports = {Triangle, Circle, Square};
  