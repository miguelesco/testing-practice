class Calculator {
  add (...nums){
    const sum = nums.reduce((prev, current) => prev + current, 0);
    return sum;
  }
  subtract (...nums) {
    const sub = nums.reduce((prev, current, i) => 
    !prev ? current - prev : prev - current, 0);
    return sub;
  }
  divide (dividend, divisor) {
    const divisionAnswer = Math.floor(dividend / divisor);
    return divisionAnswer;
  }
  multiply (...nums) {
    const sum = nums.reduce((prev, current) => 
    !prev ? current : prev * current, 0);
    return sum;
  }
}

module.exports = Calculator;