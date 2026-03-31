/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) {
    return countBound(nums,right)-countBound(nums,left-1);
};

var countBound = function(nums,bound){
    let count=0;
    let curr=0;
    for(let num of nums){
        if(num<=bound){
            curr+=1;
        }else{
            curr=0;
        }
        count+=curr;
    }
    return count;
}