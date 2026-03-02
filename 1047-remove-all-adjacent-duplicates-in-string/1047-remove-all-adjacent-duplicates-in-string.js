/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stk = [];
    for(let i=0;i<s.length;i++){
        if(stk[stk.length-1]===s[i]){
            stk.pop();
        }else{
            stk.push(s[i]);
        }
    }
    return stk.join('');
};