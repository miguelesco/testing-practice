function stringLength (string = '') {
  const length = string.length;
  if (length > 1 && length < 10) {
    return length;
  }
  throw new Error('The condition are not met');
}

module.exports = stringLength;