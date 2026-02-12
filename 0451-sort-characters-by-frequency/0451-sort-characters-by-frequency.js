/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let res = "";
    let map = new Map();
    for(let ch of s){
        map.set(ch,(map.get(ch) || 0)+1);
    }
    let sorted = Array.from(map.entries()).sort((a,b)=>b[1]-a[1]);
    for(let [char,freq] of sorted){
        res+=char.repeat(freq);
    }
    return res;
};