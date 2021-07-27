const stringLength = require('./task');

describe("Strings lengths", () => {
  test("when pass a string with 8 length", () => {
    //Arrange 
    const string = 'holamundo';
    //Act
    const receivedCount = stringLength(string);
    //Assert
    expect(receivedCount).toBe(9);
  });
  test('check if condition not met', () => {
    //Arrange
    const string = 'soy una oracion larga';
    //Act
    const error = () => stringLength(string);
    //Assert
    expect(() => error()).toThrow();
  });
});