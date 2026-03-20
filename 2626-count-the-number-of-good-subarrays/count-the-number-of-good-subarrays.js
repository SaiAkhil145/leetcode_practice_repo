/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    let freq = new Map();
    let left=0;
    let pairs=0;
    let res=0;
    let n = nums.length;
    for(let right=0;right<nums.length;right++){
        let val = nums[right];
        let f = freq.get(val) || 0;
        pairs+=f;
        freq.set(val,f+1);
        while(pairs>=k){
            res+=(n-right);
            let leftVal = nums[left];
            freq.set(leftVal,(freq.get(leftVal)-1));
            pairs-=freq.get(leftVal);
            left++;
        }
    }
    return res;
};