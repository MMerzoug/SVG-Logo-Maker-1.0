// Import the mock shape functions
const { mockCircle, mockSquare, mockTriangle } = require('./mockShapes');

describe('Mock Shapes', () => {
    // Test for mockCircle
    test('mockCircle should return a string with SVG circle data', () => {
        const circle = mockCircle();
        expect(circle.render()).toEqual("<circle cx=\"150\" cy=\"150\" r=\"50\" fill=\"black\"/>");
    });

    // Test for mockSquare
    test('mockSquare should return a string with SVG square data', () => {
        const square = mockSquare();
        expect(square.render()).toEqual("<rect x=\"50\" y=\"50\" width=\"100\" height=\"100\" fill=\"black\"/>");
    });

    // Test for mockTriangle
    test('mockTriangle should return a string with SVG triangle data', () => {
        const triangle = mockTriangle();
        expect(triangle.render()).toEqual("<polygon points=\"150, 18 244, 182 56, 182\" fill=\"black\"/>");
    });
});

