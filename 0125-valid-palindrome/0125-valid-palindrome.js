/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let clean  = cleanStr(s);
    return isPal(clean);
};

var cleanStr = function(s){
    let chars ="abcdefghijklmnopqrstuvwxyz0123456789";
    let res ="";
    for(let ch of s){
        let c = ch.toLowerCase();
        if(chars.indexOf(c)!==-1){
            res+=c;
        }
    }
    return res;
}

var isPal = function(s){
    let start=0,end=s.length-1;
    while(start<=end){
        if(s[start]!==s[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}