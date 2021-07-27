const reverseString = require('./task');

describe('reverse string function is properly workin', () => {
  test('hola is getting reverse ' , () => {
    const string = 'hola';
    const answer = reverseString(string);
    expect(answer).toBe('aloh');
  });
  test('this is test is getting reverse ' , () => {
    const string = 'this is test';
    const answer = reverseString(string);
    expect(answer).toBe('tset si siht');
  });
});