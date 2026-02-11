/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    return subArrayk(nums,k)-subArrayk(nums,k-1);
};

var subArrayk = function(nums,k){
    let left=0,count=0;
    let map = new Map();
    for(let right=0;right<nums.length;right++){
        let rightVal = nums[right];
        map.set(rightVal,(map.get(rightVal) || 0)+1);
        while(map.size>k){
            let leftVal = nums[left];
            map.set(leftVal,(map.get(leftVal)-1));
            if(map.get(leftVal)===0) map.delete(leftVal);
            left++;
        }
        count+=right-left+1;
    }
    return count;
}