/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let start = 0,end=s.length-1;
    while(start<end){
        if(s[start]!==s[end]){
            return isPal(s,start+1,end) || isPal(s,start,end-1);
        }
        start++;
        end--;
    }
    return true;
};

var isPal = function(s,start,end){
    while(start<end){
        if(s[start]!==s[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}