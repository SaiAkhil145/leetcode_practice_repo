/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let map = new Map();
    let prefix=0;
    let ans=-Infinity;
    for(let num of nums){
        if(map.has(num-k)){
            ans=Math.max(ans,prefix+num-map.get(num-k));
        }
        if(map.has(num+k)){
            ans=Math.max(ans,prefix+num-map.get(num+k));
        }
        if(!map.has(num)){
            map.set(num,prefix);
        }else{
            map.set(num,Math.min(map.get(num),prefix));
        }
        prefix+=num;
    }
    return ans===-Infinity ? 0 : ans;
};