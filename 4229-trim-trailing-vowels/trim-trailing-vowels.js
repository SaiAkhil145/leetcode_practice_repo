/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function(s) {
    let set = new Set(["a","e","i","o","u"]);
    let i = s.length-1;
    while(i>=0 && set.has(s[i].toLowerCase())){
        i--;
    }
    return s.slice(0,i+1);
};