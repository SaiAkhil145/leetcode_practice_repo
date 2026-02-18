/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map();
    let count=0,sum=0;
    map.set(0,1);
    for(let num of nums){
        sum+=num;
        let diff = sum-k;
        if(map.has(diff)){
            count+=map.get(diff);
        }
        map.set(sum,(map.get(sum) || 0)+1);
    }
    return count;
};