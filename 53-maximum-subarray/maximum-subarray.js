/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSum=0,maxSum=nums[0];
    for(let i=0;i<nums.length;i++){
        if(currSum<0){
            currSum=0;
        }
        currSum+=nums[i];
        maxSum=Math.max(currSum,maxSum);
    }
    return maxSum;
};