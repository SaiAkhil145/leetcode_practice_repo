/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let maxNum = 0;
    for(let ch of n){
        maxNum = Math.max(ch,maxNum);

        if(ch===9) return 9;
    }
    return maxNum;
};