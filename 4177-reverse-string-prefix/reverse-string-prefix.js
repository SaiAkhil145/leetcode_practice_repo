/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    let first = s.slice(0,k).split('').reverse().join('');
    let rest = s.slice(k);
    return first+rest;
};