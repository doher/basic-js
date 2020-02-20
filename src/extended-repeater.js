module.exports = function repeater(str, options) {
    if (str === null) {
        str = 'null';
    }

    const repeatTimes = options['repeatTimes'];
    const arr = new Array(repeatTimes);
    let result = '';
    let separator = '+';
    let addition = '';
    let additionRepeatTimes = 0;
    let additionSeparator = '';
    let additionStr = '';

    if (options.hasOwnProperty('separator')) {
        separator = options['separator'];
    }

    if (options.hasOwnProperty('addition')) {
        addition = options['addition'];

        if (addition === null) {
            addition = 'null';
        }
    }

    if (options.hasOwnProperty('additionRepeatTimes')) {
        additionRepeatTimes = options['additionRepeatTimes'];
    }

    if (options.hasOwnProperty('additionSeparator')) {
        additionSeparator = options['additionSeparator'];
    }

    const additionArr = new Array(additionRepeatTimes);

    additionStr = additionArr.fill(addition).join(additionSeparator);
    str += additionStr;
    result = arr.fill(str).join(separator);

    return result;
};
