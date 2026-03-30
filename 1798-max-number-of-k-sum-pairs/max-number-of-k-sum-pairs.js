/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a,b)=>a-b);
    let count=0,left=0,right=nums.length;
    while(left<right){
        let sum = nums[left]+nums[right];
        if(sum===k){
            right--;
            left++;
            count++;
        }else if(sum<k){
            left++;
        }else{
            right--;
        }
    }
    return count;
};