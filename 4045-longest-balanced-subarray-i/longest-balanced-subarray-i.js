/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function(nums) {
    let maxLen=0,n=nums.length;
    for(let i=0;i<n;i++){
        let seen = new Set();
        let even=0,odd=0;
        for(let j=i;j<n;j++){
            if(!seen.has(nums[j])){
                seen.add(nums[j]);
            
            if(nums[j]%2===0) even++;
            else odd++;
            }
            if(even===odd){
            maxLen=Math.max(maxLen,j-i+1);
        }
        }
        
    }
    return maxLen;
};