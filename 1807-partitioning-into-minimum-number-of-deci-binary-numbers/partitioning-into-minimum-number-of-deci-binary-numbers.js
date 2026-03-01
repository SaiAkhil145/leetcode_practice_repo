/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let maxNum = 0;
    for(let ch of n){
        let c = Number(ch);
        if(c>maxNum){
            maxNum=c;
        }

        if(ch===9) return 9;
    }
    return maxNum;
};