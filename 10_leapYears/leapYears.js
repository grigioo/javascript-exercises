// const leapYears = function(year) {
//     if (((year % 4 === 0) && (!(year % 100 === 0))) || ((year % 4 === 0) && (year % 400 === 0))) return true;
//     else return false;
// };

const leapYears = function(year) {
    isDivibableByFour = year % 4 === 0;
    isCentury = year % 100 === 0;
    isDivibableByFourHundred = year % 400 === 0;
    
    if (isDivibableByFour && (!isCentury || isDivibableByFourHundred)) return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
