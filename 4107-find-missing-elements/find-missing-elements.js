/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let set = new Set(nums);
    let res = [];
    for(let i=min;i<=max;i++){
        if(!set.has(i)){
            res.push(i);
        }
    }
    return res;
};