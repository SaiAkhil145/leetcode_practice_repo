/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function(nums) {
    let maxLen=0,n=nums.length;
    for(let i=0;i<n;i++){
        let evenSet = new Set();
        let oddSet = new Set();
        for(let j=i;j<n;j++){
            let num = nums[j];
            if(num%2===0){
                evenSet.add(num);
            }else{
                oddSet.add(num);
            }
            if(evenSet.size===oddSet.size){
                maxLen=Math.max(maxLen,j-i+1);
            }
        }
    }
    return maxLen;
};