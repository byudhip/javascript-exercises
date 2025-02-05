const getTheTitles = function(arr) {
    return arr.map(obj => obj[Object.keys(obj)[0]])
};

// Do not edit below this line
module.exports = getTheTitles;
