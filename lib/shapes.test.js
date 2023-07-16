import * as shapes from "../lib/mockShapes/mockShapes";
import {mockTriangle, mockCircle, mockSquare} from "./mockShapes";

module.exports = function(module, exports, require, __dirname, __filename, jest) {
    // import * as shapes from "../shapes";  };

// The Jest package will be used to write unit tests for this application.
// The unit tests will ensure that the Triangle, Circle, and Square classes are working correctly.

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
