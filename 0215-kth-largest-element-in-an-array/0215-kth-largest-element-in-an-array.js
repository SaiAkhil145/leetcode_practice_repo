/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = new MaxHeap();
    let max=0;
    for(let i=0;i<nums.length;i++){
        heap.insert(nums[i]);
    }
    while(k>0){
        max=heap.pop();
        k--;
    }
    return max;
};