// Import necessary modules
const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const fs = require ("fs");

// Define a command line interface (CLI) class
class CLI {
    // Init function starts the CLI
    init() {
        // Use inquirer to prompt the user for input
        return inquirer
        .prompt([
            // Get the text to display in the logo
            {
                name: "copy",
                type: "input",
                message: "Enter logo copy. (Choose one to three characters.",
            },
            // Get the color for the logo text
            {
                name: "copyColor",
                type: "input",
                message: "Note a copy color.",
                default: "black",  // Default color is black
            },
            // Get the type of shape for the logo
            {
                name: "chooseShapeType",
                type: "list",
                message: "What shape would you like your logo to be?",
                choices: ["circle", "square", "triangle"],  // The user can choose from these three options
            },
            // Get the color for the logo shape
            {
                name: "chooseShapeColor",
                type: "input",
                message: "Choose a color for your logo shape?",
            },
        ])
        .then((response) => {
            // Based on user's choice, create a new instance of the selected shape
            let shape;
            if(response.chooseShapeType === "circle") {
                shape = new Circle()
            } else if (response.chooseShapeType === "square") {
                shape = new Square()
            } else if (response.chooseShapeType === "triangle") {
                shape= new Triangle()
            }
            // Set the color for the shape
            shape.setColor(response.chooseShapeColor);

            // Create a new SVG with the chosen parameters
            const svg = new SVG();
            svg.setCopy(response.copy, response.copyColor);
            svg.setShape(shape);

            // Write the SVG to a file
            return fs.writeFileSync ("newLogo.svg", svg.render());
        })
        .then(() => {
            // Let the user know that the operation was successful
            console.log ("Preview your Logo");
        });
    }
}

// Export the CLI class for use in other files
module.exports = CLI;
