const inquirer = require("inquirer");
const SVG = require("./svg");
const {Circle, Triangle, Square} = require("./shapes");
const fs = require ("fs");

class CLI {
    init() {
        return inquirer
        .prompt([
            {
                name:"copy",
                type: "input",
                message: "Enter logo copy. (Choose one to three characters.",
            },
            {
                name: "copyColor",
                type:"input",
                message: "Note a copy color.",
                default: "black",
            },
            {
                name:"chooseShapeType",
                type: "list",
                message: "What shape would you like your logo to be?",
                choices: ["circle","square", "triangle"],
            },
            {
                name: "chooseShapeColor",
                type: "input",
                message: "Choose a color for your logo shape?",
            },
        ])
        .then ((response) => {
            let shape;
            if(response.chooseShapeType === "circle") {
                shape = new Circle()
            } else if ( response.chooseShapeType === "square") {
                shape = new Square()
            }
            else if ( response.chooseShapeType === "triangle") {
                shape= new Triangle()
            }
            shape.setColor(response.chooseShapeColor);

            const svg = new SVG();
            svg.setCopy(response.copy, response.copyColor);
            svg.setShape(shape);
            return fs.writeFileSync ("newLogo.svg", svg.render());
        })
        .then(() => {
            console.log ("Preview your Logo");
        });
    }
}

module.exports = CLI;

