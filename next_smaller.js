const sortDigitsInNum = num => num.toString().split('').sort((numA, numB) => numA - numB).join('');

function nextSmaller(n) {
  return function nextSmallerInner(num) {
    num = num || n;

    if ( num !== n && sortDigitsInNum(n) === sortDigitsInNum(num) ) {
      return num;
    } else if ( num === 1 ) {
      return -1;
    }

    return nextSmallerInner(num - 1);
  }
}

let nextSmallerNumAfter21 = nextSmaller(21),
    result = nextSmallerNumAfter21();
