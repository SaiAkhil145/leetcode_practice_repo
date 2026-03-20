/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a,b)=>a-b);
    let n = nums.length;
    let max1=nums[n-1],max2=nums[n-2];
    let min1=nums[0],min2=nums[1];
    return (max1*max2)-(min1*min2)
};