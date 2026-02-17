/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(str) {
    let s = str.length;
    let ans = 0;
    for(let i=0;i<s;i++){
        let freq = new Array(26).fill(0);
        let distinct=0,maxFreq=0;
        for(let j=i;j<s;j++){
            let idx = str.charCodeAt(j)-97;
            if(freq[idx]===0){
                distinct++;
            }
            freq[idx]++;
            maxFreq = Math.max(maxFreq,freq[idx]);
            let len = j-i+1;
            if(len===maxFreq*distinct){
                ans  = Math.max(len,ans);
            }
        }
    }
    return ans;
};