/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x>0 ? 1 : -1;
    let reverseNumber = parseInt(Math.abs(x).toString().split('').reverse().join(''))*sign;
    if(reverseNumber<-(2**31) || reverseNumber>(2**31-1)){
        return 0;
    }
    return reverseNumber;
};