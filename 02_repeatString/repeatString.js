const repeatString = function (str, num) {
  if (num === 0 || !str || num < 0) return num < 0 ? "ERROR" : "";
  let append = str;
  for (let i = 1; i < num; i++) {
    str += append;
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;
