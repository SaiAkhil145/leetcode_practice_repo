/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g,"");
    const reversed = cleaned.split('').reverse().join('');
    return cleaned===reversed
};