/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    while(nums.find(val=>val===original)){
        original*=2;
    }
    return original;
};