/**
 * @param {string} s
 * @return {number}
 */
var firstMatchingIndex = function(s) {
    let n = s.length;
    for(let i=0;i<(n/2);i++){
        if(s[i]===s[n-i-1]){
            return i;
        }
    }
    return -1;
};