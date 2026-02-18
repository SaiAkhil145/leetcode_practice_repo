/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    
    function getCount(nums,goal){
        if(goal<0) return 0;
        let count=0,left=0,sum=0;
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
    return getCount(nums,goal)-getCount(nums,goal-1);
};