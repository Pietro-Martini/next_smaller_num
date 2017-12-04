const sortDigitsInNum = num => num.toString().split('').sort((numA, numB) => numA - numB).join('');

const checkIfAllArrElsAreIdentical = (fn, ...nums) => nums.every(num => fn(num) === fn(nums[0]));

function nextSmaller(n, fn) {
  return function nextSmallerInner(num) {
    num = num || n;

    if ( num !== n && fn(num, n) ) {
      return num;
    } else if ( num === 1 ) {
      return -1;
    }

    return nextSmallerInner(num - 1);
  }
}

let nextSmallerNumAfter21 = nextSmaller(21, checkIfAllArrElsAreIdentical.bind(null, sortDigitsInNum)),
    result = nextSmallerNumAfter21();
