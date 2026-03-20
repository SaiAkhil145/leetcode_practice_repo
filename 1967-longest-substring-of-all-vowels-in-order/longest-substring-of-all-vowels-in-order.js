/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function(word) {
    let maxLen=0,len=1,count=1;
    for(let i=1;i<word.length;i++){
        if(word[i]>=word[i-1]){
            len++;
            if(word[i]>word[i-1]){
                count++;
            }
        }else{
            len=1;
            count=1;
        }
        if(count===5){
            maxLen=Math.max(len,maxLen);
        }
    }
    return maxLen;
};