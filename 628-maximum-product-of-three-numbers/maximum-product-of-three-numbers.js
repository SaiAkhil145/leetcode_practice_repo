/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b)=>b-a);
    let n = nums.length;
    let op1 = nums[0]*nums[1]*nums[2];
    let op2 = nums[n-1]*nums[n-2]*nums[0];
    return Math.max(op1,op2);
    
};