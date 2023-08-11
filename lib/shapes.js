// Shape class to define what Shape is doing
class Shape {
  constructor() {
    this.color = '';
  }

  setColor(colorVar) {
    this.color = colorVar;
  }
}  

// These three shapes inherits properties defined in shape from the 'extends'
  class Circle extends Shape {
    render() {
      // Returns circle with the color input
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }

  class Square extends Shape {
    render() {
      return `<rect x="72" y="35" width="150" height="150" fill="${this.color}" />`;
    }
  }

  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }

// Exports the three shape classes
module.exports = { Circle, Square, Triangle };