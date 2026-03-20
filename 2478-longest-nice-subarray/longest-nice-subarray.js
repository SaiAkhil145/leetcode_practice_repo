/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let left=0;
    let bitmask=0;
    let maxLen=0;
    for(let right=0;right<nums.length;right++){
        
        while((bitmask & nums[right])!==0){
            bitmask^=nums[left];
            left++;
        }
        bitmask |=nums[right];
        maxLen=Math.max(maxLen,right-left+1);
    }
    return maxLen;
};