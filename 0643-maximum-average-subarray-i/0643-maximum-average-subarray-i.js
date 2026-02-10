/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum=0,maxAvg=0;
    // iterate from 0 to k window and add it in sum
    for(let i=0;i<k;i++){
        sum+=nums[i];
    }
    // initially the maxAvg will be sum/k;
    maxAvg = sum/k;
    // now iterate from k to n-1 and shrink the window step by step
    for(let i=k;i<nums.length;i++){
        // add new element to the sum and delete the first element of the array
        // sum+=nums[k]-nums[k-k]
        // sum+=nums[2]-nums[0];
        sum+=nums[i]-nums[i-k];
        maxAvg = Math.max(maxAvg,sum/k);
    }
    return maxAvg;
};