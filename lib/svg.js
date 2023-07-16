class SVG {
    constructor() {
        this.copy = '';
        this.shape = '';
    }

    setCopy(chosenCopy, chosenCopyColor) {
        this.copy = `<text x="0" y="15" fill="${chosenCopyColor}">${chosenCopy}</text>`;
    }

    setShape(chosenShapeType) {
        this.shape = chosenShapeType.render();
    }

    render() {
        return `<svg width="300" height="300">${this.shape}${this.copy}</svg>`;
    }
}

module.exports = SVG;

