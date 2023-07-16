const inquirer = await import("inquirer");
const fs = require("fs");

// Import the mocked versions of the shapes
import {mockTriangle, mockCircle, mockSquare} from "./mockShapes";

// Define the shapes
const Triangle = function() {
  this.color = "black";
};

Triangle.prototype.render = function() {
  return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
};

const Circle = function() {
  this.color = "black";
  this.radius = 100;
};

Circle.prototype.render = function() {
  return `<circle cx="150" cy="150" r="${this.radius}" fill="${this.color}" />`;
};

const Square = function() {
  this.color = "black";
  this.width = 200;
};

Square.prototype.render = function() {
  return `<rect x="50" y="50" width="${this.width}" height="${this.width}" fill="${this.color}" />`;
};

// Prompt the user for input
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter text for the logo:",
    validate: function(text) {
      if (text.length > 3) {
        return "Text must be 3 characters or less";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "shape",
    message: "Select a shape:",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "color",
    message: "Enter a color (keyword or hexadecimal):",
  },
];

const answers = await inquirer.prompt(questions);

// Create the shape
const shape = new answers.shape();
shape.color = answers.color;

// Render the SVG
const svg = await shape.render();

// Save the SVG to a file
const filename = `logo.svg`;
fs.writeFileSync(filename, svg);

// Print a success message
console.log(`Generated ${filename}`);

// Start the application
main();
