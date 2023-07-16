import * as shapes from "./shapes";

// The Jest package will be used to write unit tests for this application.
// The unit tests will ensure that the Triangle, Circle, and Square classes are working correctly.

describe("Triangle", () => {
    it("should render correctly", () => {
    const triangle = new Triangle();
    const svg = triangle.render();
    expect(svg).toMatchSnapshot();
    });
    });
    
    describe("Circle", () => {
    it("should render correctly", () => {
    const circle = new Circle();
    const svg = circle.render();
    expect(svg).toMatchSnapshot();
    });
    });
    
    describe("Square", () => {
    it("should render correctly", () => {
    const square = new Square();
    const svg = square.render();
    expect(svg).toMatchSnapshot();
    });
    });