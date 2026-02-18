/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let map = new Map();
    let sum=0,count=0;
    map.set(0,1);
    for(let num of nums){
        sum+=num;
        let diff = sum-goal;
        if(map.has(diff)){
            count+=map.get(diff);
        }
        map.set(sum,(map.get(sum) || 0)+1);
    }
    return count;
};