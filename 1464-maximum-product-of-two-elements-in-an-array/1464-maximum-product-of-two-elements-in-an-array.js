/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a,b)=>a-b);
    let n = nums.length-1;
    return (nums[n]-1)*(nums[n-1]-1);
};