# SVG-LOGO-MAKER-1.0

## Description
A Node.js command-line application that generates a simple logo as an SVG file based on user input. The user is prompted to select a color and shape, provide text for the logo, and then the generated SVG is saved to a `.svg` file.

This application helps freelance web developers to generate simple logos for their projects without the need to hire a graphic designer.

Here's a [walkthrough video](https://watch.screencastify.com/v/Qkp5WrnGO5UScxaBa2IJ) that demonstrates its functionality and all passing tests.

## User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named logo.svg
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the logo.svg file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Getting Started
1. Clone this repository.
2. Navigate into the cloned directory.
3. Install Node.js if not already installed.
4. Run `npm install` to install required packages.
5. Start the application with `npm start`.

## Dependencies
- Node.js
- Inquirer.js

## Contact Information
For additional information, questions or comments, please contact me at:
- Github: [MMerzoug](https://github.com/MMerzoug)
- Email: monique.merzoug@icloud.com
