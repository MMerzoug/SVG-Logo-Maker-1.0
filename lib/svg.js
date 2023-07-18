// Define the SVG class
class SVG {
    // The constructor initializes the copy and shape properties
    constructor() {
        this.copy = ''; // Copy for the SVG, i.e., the text within the shape
        this.shape = ''; // Shape of the SVG, e.g., circle, square, or triangle
    }

    // The setCopy method assigns the chosenCopy (text) and chosenCopyColor (color of the text) to the copy property.
    // The text is centered by setting x="150" and y="155" (vertical alignment is approximate due to lack of baseline support in SVG)
    setCopy(chosenCopy, chosenCopyColor) {
        this.copy = `<text x="150" y="155" fill="${chosenCopyColor}" text-anchor="middle" dominant-baseline="central">${chosenCopy}</text>`;
    }

    // The setShape method assigns the rendered version of the chosenShapeType to the shape property
    setShape(chosenShapeType) {
        this.shape = chosenShapeType.render();
    }

    // The render method returns the SVG markup for the shape and copy, contained within a 300x300 SVG viewport
    render() {
        return `<svg width="300" height="300">${this.shape}${this.copy}</svg>`;
    }
}

// The SVG class is exported for use in other modules
module.exports = SVG;
