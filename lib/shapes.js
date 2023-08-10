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
      return `<circle cx="25" cy="75" r="20" fill="${this.color}" />`;
    }
  }

  class Square extends Shape {
    render() {
      return `<rect x="10" y="10" width="30" height="30" fill="${this.color}" />`;
    }
  }

  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }

// Exports the three shape classes
module.exports = { Circle, Square, Triangle };