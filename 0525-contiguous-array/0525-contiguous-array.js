/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
     for(let i=0;i<nums.length;i++){
        if(nums[i]===0) nums[i]=-1;
    }
    let sum=0,maxLen = 0;
    let map = new Map();
    map.set(0,-1);
    for(let right=0;right<nums.length;right++){
        sum+=nums[right];

       

        if(map.has(sum)){
            maxLen = Math.max(maxLen,right-map.get(sum));
        }else{
        map.set(sum,right);
        }

    }
    return maxLen;
};