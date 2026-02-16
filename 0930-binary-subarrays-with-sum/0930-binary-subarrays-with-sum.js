/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    return validSubarray(nums,goal)-validSubarray(nums,goal-1);
};

var validSubarray = function(nums,goal){
    if(goal<0) return 0;
    let sum=0,count=0;
    let left=0;
    for(let right=0;right<nums.length;right++){
        sum+=nums[right];
        while(sum>goal){
            sum-=nums[left];
            left++;
        }
        count+=right-left+1;
    }
    return count;
}