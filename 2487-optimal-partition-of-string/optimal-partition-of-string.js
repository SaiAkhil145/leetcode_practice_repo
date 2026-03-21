/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let set = new Set();
    let count=1;
    for(let ch of s){
        if(set.has(ch)){
            count++;
            set.clear();
        }
        set.add(ch);
    }
    return count;
};