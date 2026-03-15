/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count=0;
    for(let i=0;i<s.length;i++){
        let left=i,right=i;
        isPal(left,right);
        isPal(left,right+1);
    }
    function isPal(left,right){
        while(left>=0 && right<=s.length && s[left]===s[right]){
            left--;
            right++;
            count++;
        }
        
    }
    return count;
};