/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]===nums[i+1]){
            nums[i]=nums[i]*2;
            nums[i+1]=0
        }
    }
    let i=0;
    for(let j=0;j<nums.length;j++){
        if(nums[j]!==0){
            [nums[i],nums[j]]=[nums[j],nums[i]];
            i++;
        }
    }
    return nums;
};
