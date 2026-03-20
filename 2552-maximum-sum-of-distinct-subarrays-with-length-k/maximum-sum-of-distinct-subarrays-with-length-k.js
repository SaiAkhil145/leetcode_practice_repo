/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let map = new Map();
    let sum=0;
    let maxSum=0;
    let left=0;
    for(let right=0;right<nums.length;right++){
        let val=nums[right];
        sum+=val;
        map.set(val,(map.get(val) || 0)+1);
        while(right-left+1>k){
            let leftVal=nums[left];
            sum-=leftVal;
            map.set(leftVal,(map.get(leftVal)-1));
            if(map.get(leftVal)===0){
                map.delete(leftVal);
            }
            left++;
        }
        if(right-left+1===k && map.size===k){
            maxSum=Math.max(maxSum,sum);
        }
    }
    return maxSum;
};