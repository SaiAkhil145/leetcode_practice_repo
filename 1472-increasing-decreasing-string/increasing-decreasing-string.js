/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let freq = new Array(101).fill(0);
    for(let ch of s){
        freq[ch.charCodeAt(0)-97]++;
    }
    let result=[];
    while(result.length<s.length){
        for(let i=0;i<26;i++){
            if(freq[i]>0){
                result.push(String.fromCharCode(i+97));
                freq[i]--;
            }
        }
        for(let i=25;i>=0;i--){
            if(freq[i]>0){
                result.push(String.fromCharCode(i+97));
                freq[i]--
            }
        }
    }
    return result.join('');
};