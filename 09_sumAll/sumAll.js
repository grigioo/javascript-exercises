const sumAll = function(first, last) {
    if (typeof(first) !== 'number' || typeof(last) !== 'number') return 'ERROR';
    else if (first < 0) return 'ERROR';
    else if (Math.round(last) !== last || Math.round(first) !== first) return 'ERROR';
    else if (first > last) [[first],[last]] = [[last],[first]];
    let currentNumber = first;
    let sum = 0;

    while (currentNumber <= last) {
        sum += currentNumber;
        currentNumber++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
