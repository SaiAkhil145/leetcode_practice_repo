/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let map = new Map();
    let maxLen=-1;
    for(let i=0;i<s.length;i++){
        if(!map.has(s[i])){
            map.set(s[i],i);
        }else{
            let firstIndex=map.get(s[i]);
            maxLen=Math.max(maxLen,i-firstIndex-1);
        }
    }
    return maxLen;
};