const { Circle, Triangle, Square } = require('./shapes');

test('Circle generates correct SVG code with red color', () => {
    const shape = new Circle("red");
    const svgCode = shape.generateSVG();
    expect(svgCode).toEqual('<circle cx="150" cy="100" r="100" fill="red" />');
});

test('Triangle generates correct SVG code with blue color', () => {
    const shape = new Triangle("blue");
    const svgCode = shape.generateSVG();
    expect(svgCode).toEqual('<polygon points="150,50 100,150 200,150" fill="blue" />');
});

test('Square generates correct SVG code with green color', () => {
    const shape = new Square("green");
    const svgCode = shape.generateSVG();
    expect(svgCode).toEqual('<rect x="100" y="50" width="100" height="100" fill="green" />');
});

test('Circle generates correct SVG code with red hex color', () => {
    const shape = new Circle("#FF0000");
    const svgCode = shape.generateSVG();
    expect(svgCode).toEqual('<circle cx="150" cy="100" r="100" fill="#FF0000" />');
});

test('Triangle generates correct SVG code with blue hex color', () => {
    const shape = new Triangle("#0000FF");
    const svgCode = shape.generateSVG();
    expect(svgCode).toEqual('<polygon points="150,50 100,150 200,150" fill="#0000FF" />');
});

test('Square generates correct SVG code with green hex color', () => {
    const shape = new Square("#00ff00");
    const svgCode = shape.generateSVG();
    expect(svgCode).toEqual('<rect x="100" y="50" width="100" height="100" fill="#00ff00" />');
});