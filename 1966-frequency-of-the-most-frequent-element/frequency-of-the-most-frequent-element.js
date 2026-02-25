/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a,b)=>a-b);
    let left=0,sum=0,maxLen=0;
    // ideal formula for 
    // nums[right]*size(right-left+1)-sum if this is greater than k then we need to move the left window
    for(let right=0;right<nums.length;right++){
        sum+=nums[right];
        while(nums[right]*(right-left+1)-sum>k){
            sum-=nums[left];
            left++;
        }
        maxLen=Math.max(maxLen,right-left+1);
    }
    return maxLen;
};