/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    function backtrack(brackets,open,close){
        if(brackets.length===n*2){
            result.push(brackets);
            return;
        }
        if(open<n){
            backtrack(brackets+"(",open+1,close);
        }
        if(close<open){
            backtrack(brackets+")",open,close+1);
        }
    }
    backtrack("",0,0);
    return result;
};