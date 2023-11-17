const _ = {
  clamp(num, lNum, uNum) {
    let lowerClampedValue = Math.max(num, lNum);
    let clampedValue = Math.min(lowerClampedValue, uNum);
    return clampedValue;
  },

  inRange(num, startNum, endNum) {
    if (endNum === undefined) {
        endNum = startNum;
        startNum = 0;
    }
    if (startNum > endNum) {
        let tempNum = endNum;
        endNum = startNum;
        startNum = tempNum;
    }
    if (num === endNum) {
        return false;
    }
    let isInRange = num >= startNum && num <= endNum;
    return isInRange;
  },

  words(str) {
    strArray = str.split(' ');
    return strArray;
  },

  pad(str, len) {
    if (len > str.length) {
      let startPadding = Math.floor((len - str.length) / 2);
      let endPadding = len - str.length - startPadding;
      let paddedStr = ' '.repeat(startPadding) + str + ' '.repeat(endPadding);
      return paddedStr
    } else {
      return str;
    }
  },

  has(obj, key) {
    let objKeys = Object.keys(obj).includes(key);
    return objKeys;
  },
  
  invert(obj) {
    const invObj = {};
    for (let key in obj) {
      let ogValue = obj[key];
      invObj[ogValue] = key;
    }
    // console.log(obj);
    // console.log(invObj);
    return invObj;
  }
};




// Do not write or modify code below this line.
module.exports = _;