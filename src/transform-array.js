const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  throw new NotImplementedError('Not implemented');

  // if (!Array.isArray(arr)) {
  //   return "'arr' parameter must be an instance of the Array!";
  // }

  // let transformArr = [];

  // let currElem = null,
  //   prevElem = null,
  //   nextElem = null,
  //   discardNext = false,
  //   discardPrev = false,
  //   doubleNext = false,
  //   doublePrev = false;

  // for (let i = 0; i < arr.length; i++) {
  //   currElem = arr[i];

  //   if (i < arr.length - 1) {
  //     nextElem = arr[i + 1];
  //   } else {
  //     nextElem = null;
  //   }

  //   if (i === 0) {
  //     prevElem = null;
  //     (arr.length === 1) ? nextElem = null: nextElem = arr[1];
  //   }

  //   if (discardNext) {
  //     prevElem = arr[i];
  //     discardNext = false;
  //     continue;
  //   }
  //   if (doubleNext) {
  //     prevElem = arr[i];
  //     transformArr.push(arr[i]);
  //     transformArr.push(arr[i]);
  //     doubleNext = false;
  //     continue;
  //   }
  //   if (discardPrev) {
  //     if (transformArr.length === 0) {
  //       discardPrev = false;
  //     } else {
  //       transformArr.pop();
  //       discardPrev = false;
  //     }
  //   }
  //   if (doublePrev) {
  //     if (transformArr.length > 0) {
  //       transformArr.push(transformArr[transformArr.length - 1]);
  //       transformArr.push(arr[i]);
  //       prevElem = arr[i];
  //       doublePrev = false;
  //       continue;
  //     } else {
  //       doublePrev = false;
  //     }
  //   }

  //   if (arr[i] === '--discard-next') {
  //     discardNext = true;
  //   } else if (arr[i] === '--discard-prev') {
  //     discardPrev = true;
  //     if (i === arr.length - 1) {
  //       transformArr.pop();
  //     }
  //   } else if (arr[i] === '--double-next') {
  //     doubleNext = true;
  //   } else if (arr[i] === '--double-prev') {
  //     doublePrev = true;
  //     if (i === arr.length - 1) {
  //       transformArr.push(transformArr[transformArr.length - 1]);
  //     }
  //   } else {
  //     transformArr.push(arr[i]);
  //   }
  //   prevElem = arr[i];
  // }

  // return transformArr;
}

module.exports = {
  transform
};