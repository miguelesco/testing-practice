const Calculator = require('./task');

describe('Calculator functions', () => {
  test('should make a sum of any element', () => {
    const calculator = new Calculator();
    const sum = calculator.add(5,3,10,1000);
    expect(sum).toBe(1018);
  });

  test('should make a substract of any element', () => {
    const calculator = new Calculator();
    const subtract = calculator.subtract(5,3,10,1000);
    expect(subtract).toBe(-1008);
  });

  test('should make a divide of two elements', () => {
    const calculator = new Calculator();
    const division = calculator.divide(20, 5);
    expect(division).toBe(4);
  });
  
  test('should make a divide of two elements', () => {
    const calculator = new Calculator();
    const division = calculator.divide(5248, 35);
    expect(division).toBe(149);
  });
  
  test('should make a multiplication of any element', () => {
    const calculator = new Calculator();
    const multiply = calculator.multiply(5,4);
    expect(multiply).toBe(20);
  });
  
  test('should make a multiplication of any element', () => {
    const calculator = new Calculator();
    const multiply = calculator.multiply(5,4,20,39, 85);
    expect(multiply).toBe(1326000);
  });
  
})
