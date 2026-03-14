/**
 * @param {number} n
 * @return {number}
 */

var fib = function(n) {
    let dp = {};
    if(n<=1) return n;
    if(!dp[n]){
        dp[n]=fib(n-1)+fib(n-2);
    }
    return dp[n];
};