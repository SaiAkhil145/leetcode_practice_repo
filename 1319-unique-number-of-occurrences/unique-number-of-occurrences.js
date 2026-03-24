/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map();
    for(let a of arr){
        map.set(a,(map.get(a) || 0)+1);
    }
    let set = new Set();
    for(let freq of map.values()){
        if(set.has(freq)) return false;
        set.add(freq);
    }
    return true;
};