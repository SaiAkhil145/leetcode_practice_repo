/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let right=0,left=0,maxLen=0,map=new Map();
    while(right<s.length){
        
        if(map.has(s[right]) && map.get(s[right])>=left){
            left=map.get(s[right])+1;
        }
        map.set(s[right],right);
        maxLen=Math.max(maxLen,right-left+1);
        right++;
    }
    return maxLen;
};