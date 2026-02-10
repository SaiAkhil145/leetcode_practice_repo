/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i=0,j=0;
    // iterate from j=0 to nums.length
    while(j<nums.length){
        // check whether the current element is equals to val if not push it into the nums[i];
        if(nums[j]!==val){
            // then the unique value will be stored inside nums[i];
            nums[i]=nums[j];
            i++;
        }
        j++;
    }
    return i;
};