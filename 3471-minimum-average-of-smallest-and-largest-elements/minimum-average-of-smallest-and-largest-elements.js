/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    nums.sort((a,b)=>a-b);
    let j = nums.length-1;
    let minAvg = Infinity;
    for(let i=0;i<Math.floor(nums.length/2);i++){
        let avg = (nums[i]+nums[j])/2;
        minAvg = Math.min(minAvg,avg);
        j--;
    }
    return minAvg;
};