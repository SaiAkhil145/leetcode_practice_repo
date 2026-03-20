/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
    let sum=a+b+c;
    let maxVal = Math.max(a,b,c);
    return Math.min(sum-maxVal,Math.floor(sum/2))
};