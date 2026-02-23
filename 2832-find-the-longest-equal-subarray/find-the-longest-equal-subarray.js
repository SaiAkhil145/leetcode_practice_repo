/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function(nums, k) {
    let left=0,largest=0;
    let longest=0;
    let freq = {};
    for(let right=0;right<nums.length;right++){
        freq[nums[right]]= (freq[nums[right]] || 0)+1;
        largest = Math.max(largest,freq[nums[right]]);
        while((right-left+1)-largest > k){
            freq[nums[left]]--;
            left++;
        }
        longest = Math.max(longest,largest);

    }
    return longest;
};