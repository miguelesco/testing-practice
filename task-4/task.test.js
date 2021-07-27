const Capitalized = require('./task');

describe('capitalize tests', () => {
  test('return the first string capitalized', () => {
    const string = 'test';
    const answer = Capitalized(string);
    expect(answer).toBe('T');
  });
})
