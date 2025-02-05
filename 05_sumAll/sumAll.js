const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 < 0 ||
    num2 < 0 ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num1) 
  )
    return "ERROR";
  let n = num1 > num2 ? num1 : num2;
  return n*(n+1)/2;
};

// Do not edit below this line
module.exports = sumAll;
