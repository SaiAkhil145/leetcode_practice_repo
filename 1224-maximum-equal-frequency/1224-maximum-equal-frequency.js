/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function(nums) {
    let count=new Map();
    let freq = new Map();

    let maxFreq=0,maxLen=0;
    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        let prev = count.get(num) || 0;
        if(prev>0){
            freq.set(prev,freq.get(prev)-1);
        }
        let curr = prev+1;
        count.set(num,curr);
        freq.set(curr,(freq.get(curr) || 0)+1);

        maxFreq = Math.max(maxFreq,curr);

        let len = i+1;
        if(maxFreq===1 || maxFreq*freq.get(maxFreq)+1===len || (maxFreq-1)*(freq.get(maxFreq-1) || 0)+maxFreq===len){
            maxLen=len;
        }
    }
    return maxLen;
};