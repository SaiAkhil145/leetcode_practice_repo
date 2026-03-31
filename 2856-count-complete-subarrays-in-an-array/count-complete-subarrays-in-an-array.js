/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    let totalDistinct = new Set(nums).size;
    let map = new Map();
    let count=0,left=0;
    for(let right=0;right<nums.length;right++){
        map.set(nums[right],(map.get(nums[right]) || 0)+1);

        while(map.size===totalDistinct){
            count+=nums.length-right;
            map.set(nums[left],(map.get(nums[left]) || 0)-1);
            if(map.get(nums[left])===0){
                map.delete(nums[left]);
            }
            left++;
        }
    }
    return count;
};