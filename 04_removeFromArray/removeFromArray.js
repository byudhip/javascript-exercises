const removeFromArray = function(arr, rmv1, rmv2, rmv3, rmv4) {
    const toRemove = [rmv1, rmv2, rmv3, rmv4]
    return arr.filter(item => !toRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
