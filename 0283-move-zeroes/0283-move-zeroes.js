/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i=0,j=0;
    // run the loop from j=0 to nums.length
    while(j<nums.length){
        // check if the current value is not a zero and then swap with ith element 
        if(nums[j]!==0){
            // swap here and after swap we need to increment the value of i
            [nums[i],nums[j]]=[nums[j],nums[i]];
            i++;
        }
        // we increment the value of j everytime until the loop ends.
        j++;
    }
    return nums;
};