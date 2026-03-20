/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    nums.sort((a,b)=>a-b);
    let n = nums.length;
    let start=nums[0],end=nums[n-1];
    let set = new Set(nums);
    let res=[];
    for(let i=start;i<=end;i++){
        if(!set.has(i)){
            res.push(i);
        }
    }
    return res;
};