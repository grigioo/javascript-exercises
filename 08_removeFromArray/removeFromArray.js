// Example with adition arguments insteed of rest parametrs for more values
// const removeFromArray = function(array) {
//     const arrayArguments = [...arguments];
//     return array.filter(item => !arrayArguments.includes(item));
// };

const removeFromArray = function(array, ...args) {
    return array.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
