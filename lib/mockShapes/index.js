// Define a mockCircle function that returns an object
const mockCircle = () => {
  return {
      // This object has a method called render
      // render method returns a string that represents a SVG circle with center at (150,150), radius 50 and color black
      render() {
          return "<circle cx=\"150\" cy=\"150\" r=\"50\" fill=\"black\"/>";
      },
  };
};

// Define a mockSquare function that returns an object
const mockSquare = () => {
  return {
      // This object has a method called render
      // render method returns a string that represents a SVG square with upper-left corner at (50,50), side length 100 and color black
      render() {
          return "<rect x=\"50\" y=\"50\" width=\"100\" height=\"100\" fill=\"black\"/>";
      },
  };
};

// Define a mockTriangle function that returns an object
const mockTriangle = () => {
  return {
      // This object has a method called render
      // render method returns a string that represents a SVG triangle with given points and color black
      render() {
          return "<polygon points=\"150, 18 244, 182 56, 182\" fill=\"black\"/>";
      },
  };
};

// Export the mock shapes
module.exports = { mockCircle, mockSquare, mockTriangle };