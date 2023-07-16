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

  class Square {
    constructor(width) {
    this.width = width;
    this.color = "black";
    }
    
    render() {
    return <rect x="50" y="50" width="${this.width}" height="${this.width}" fill="${this.color}" />;
    }
    }
    
    
  
  export default {
    Triangle,
    Circle,
    Square,
  };
  