/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let mod = 1e9+7;
    let count=0;
    let curr=0;
    for(let ch of s){
        if(ch==="1"){
            curr++;
            count+=curr;
        }else{
            curr=0;
        }
    }
    return count%mod;
};