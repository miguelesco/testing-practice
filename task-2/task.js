function reverseString(string = '') {
  const reverseString = string.split('').reverse().join('');
  return reverseString;
}

module.exports = reverseString;