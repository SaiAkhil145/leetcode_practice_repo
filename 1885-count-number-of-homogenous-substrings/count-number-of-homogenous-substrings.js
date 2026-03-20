/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    let mod = 1e9+7;
    let count=1;
    let curr=1;
    for(let i=1;i<s.length;i++){
        if(s[i]===s[i-1]){
            curr++;
        }else{
            curr=1;
        }
        count+=curr;
    }
    return count%mod;
};