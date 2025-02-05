const convertToCelsius = function(f) {
  let converted = (f - 32) * (5/9);
  return converted === 0 ? converted : Number(converted.toFixed(1));
};

const convertToFahrenheit = function(c) {
  let converted = c * (9/5) + 32;
  return converted === 0 ? converted : Number(converted.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
