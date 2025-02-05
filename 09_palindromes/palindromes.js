const palindromes = function (str) {
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const revStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === revStr;
};

// Do not edit below this line
module.exports = palindromes;
