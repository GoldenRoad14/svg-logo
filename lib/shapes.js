//Define Shape class
class Shape {
    constructor() {
    }
}
class Circle extends Shape {
    constructor(shapeColor) {
        super();
        this.radius = 100;
        this.color = shapeColor;
    }
    generateSVG(){
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
}

//Extend Shape class to specific shape elements
class Triangle extends Shape {
    constructor(shapeColor){
        super();
        this.sideLength = 100;
        this.color = shapeColor;
    }

    generateSVG(){
        return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
} 

class Square extends Shape {
    constructor(shapeColor){
        super();
        this.sideLength = 100;
        this.color = shapeColor;
    }
    generateSVG(){
        return `<rect x="100" y="50" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}

//Generate the SVG code
function generateSVG(userInput) {
    const { initials, initialsColor, fontType, shape, shapeColor } = userInput;
  
    let svgCode = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

    switch (shape) {
      case 'Circle':
        shapeInstance = new Circle(shapeColor);
        break;
      case 'Triangle':
        shapeInstance = new Triangle(shapeColor);
        break;
      case 'Square':
        shapeInstance = new Square(shapeColor);
        break;
    }

    let fontFamily;
    switch (fontType) {
        case 'Serif':
            fontFamily = 'Times New Roman, Times, serif';
            break;
        case 'Sans-Serif':
            fontFamily = 'Verdana, Geneva, sans-serif';
            break;
        case 'Scripty':
            fontFamily = 'Brush Script MT, cursive';
            break;
        case 'Monospace':
            fontFamily = 'Courier New, Courier, monospace';
            break;
        default:
            fontFamily = 'sans-serif';
            break;
    }
  
    svgCode += shapeInstance.generateSVG();

    svgCode += `<text x="150" y="120" font-size="50" fill="${initialsColor}" text-anchor="middle" font-family="${fontFamily}">${initials}</text>`;

    svgCode += `</svg>`;
  
    return svgCode;
  }
  //export SVG code + Shape classes for jest tests
  module.exports = { generateSVG, Circle, Triangle, Square };
