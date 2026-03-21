/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let current = "";
    for(let word of words){
        current+=word;

        if(current===s) return true;
        if(current.length>s.length) return false;
    }
    return false;
};