const {
    NotImplementedError
} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    // throw new NotImplementedError('Not implemented');

    const seasons = {
        'spring': [2, 3, 4],
        'summer': [5, 6, 7],
        'autumn': [8, 9, 10],
        'winter': [0, 1, 11]
    };

    if (arguments.length === 0) {
        return 'Unable to determine the time of year!';
    }

    if (!(date instanceof Date)) {
        return 'Invalid date!';
    }
    if (date.getMonth() in seasons.spring) {
        return 'spring';
    } else if (date.getMonth() in seasons.summer) {
        return 'summer';
    } else if (date.getMonth() in seasons.autumn) {
        return 'autumn';
    } else if (date.getMonth() in seasons.winter) {
        return 'winter';
    }
    // else {
    //   return 
    // }
}

module.exports = {
    getSeason
};