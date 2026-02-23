/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minLength = function(nums, k) {
    let left=0,minLen=Infinity,sum=0;
    let map = new Map();
    for(let right=0;right<nums.length;right++){
        let rightVal = nums[right];
        map.set(rightVal,(map.get(rightVal) || 0)+1);
        if(map.get(rightVal)===1){
            sum+=rightVal;
        }
        while(sum>=k){
            minLen=Math.min(minLen,right-left+1);
            let leftVal=nums[left];
            map.set(leftVal,map.get(leftVal)-1);
            if(map.get(leftVal)===0){
                sum-=leftVal;
            }
            left++;
        }
    }
    return minLen===Infinity ? -1 : minLen;
};