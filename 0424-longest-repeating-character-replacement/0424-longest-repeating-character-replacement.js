/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left=0,maxFreq=0;
    let maxLen=0;
    let freq = {};
    for(let right=0;right<s.length;right++){
        let rightChar = s[right];
        freq[rightChar] = (freq[rightChar] || 0)+1;
        maxFreq = Math.max(maxFreq,freq[rightChar]);
        while((right-left+1)-maxFreq>k){
            let leftChar = s[left];
            freq[leftChar]--;
            left++;
        }
        maxLen = Math.max(maxLen,right-left+1);
    }
    return maxLen;
};