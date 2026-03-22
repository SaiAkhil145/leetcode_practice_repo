/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if(n===0) return 1;
    let count=10;
    let available=9;
    let unique=9; 
    for(let i=2;i<=n && available>0 ;i++){
        unique*=available;
        count+=unique;
        available--;
    }
    return count;
};