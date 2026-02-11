/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;

    let freq = {};
    for(let ch of s){
        freq[ch] = (freq[ch] || 0)+1;
    }
    for(let c of t){
        if(!freq[c]){
            return false;
        }
        freq[c]--;
    }
    return true;
};