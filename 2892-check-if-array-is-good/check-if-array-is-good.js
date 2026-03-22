/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let n = nums.length-1;
    let map = new Map();
    for(let num of nums){
        map.set(num,(map.get(num) || 0)+1);
    }
    if(map.get(n)!==2) return false;
    for(let i=1;i<n;i++){
        if(map.get(i)!==1) return false;
    }
    return true;
};