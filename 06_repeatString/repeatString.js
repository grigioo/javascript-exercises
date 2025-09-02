const repeatString = function(stroke, count) {
    let strokeNew = '';
    if (count < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < count; i++) {
        strokeNew += stroke;
    }
    return strokeNew;
};

// Do not edit below this line
module.exports = repeatString;
