/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stk = [];
    for(let digit of num){
        while(stk.length && k>0 && stk[stk.length-1]>digit){
            stk.pop();
            k--;
        }
        stk.push(digit);
    }
     while(k>0){
            stk.pop();
            k--;
    }
    let result = stk.join('').replace(/^0+/,'');
    return result==='' ? '0' : result;
};