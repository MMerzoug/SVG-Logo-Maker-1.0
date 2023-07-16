class Triangle {
    constructor() {
      this.color = "black";
    }
  
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  class Circle {
    constructor(radius) {
      this.radius = radius;
      this.color = "black";
    }
  
    render() {
      return `<circle cx="150" cy="150" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  export default {
    Triangle,
    Circle,
  };
  