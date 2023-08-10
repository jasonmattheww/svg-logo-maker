// Import shape Classes
const { Circle, Square, Triangle } = require('../lib/shapes');

// Runs test to see if this statment is true or false
describe('Circle', () => {
  test('test to see if circle renders a green background', () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="green" />');
  });
});

describe('Square', () => {
  test('test to see if square renders a blue background', () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect x="10" y="10" width="30" height="30" fill="blue" />');
  });
});

describe('Triangle', () => {
  test('test to see if triangle renders a red background', () => {
    const shape = new Triangle();
    shape.setColor("red");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
  });
});