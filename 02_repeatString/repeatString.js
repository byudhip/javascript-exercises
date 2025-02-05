const repeatString = function (str, num) {
  if (num === 0) return "";
  if (num < 0) return "ERROR";
  if (!str) return "";
  let append = str;
  for (let i = 1; i < num; i++) {
    str += append;
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;
