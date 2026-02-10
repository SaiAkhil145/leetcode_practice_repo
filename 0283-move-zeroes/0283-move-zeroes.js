/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i=0,j=0;
    while(j<nums.length){
        if(nums[j]!==0){
            [nums[i],nums[j]]=[nums[j],nums[i]];
            i++;
        }
        j++;
    }
    return nums;
};