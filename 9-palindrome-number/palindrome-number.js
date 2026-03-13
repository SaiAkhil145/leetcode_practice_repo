/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let y=x;
    let rev=0;
    if(x<0){
     return false;
    }else{
    while(y!=0){
        rev=rev*10+(y%10);
        y=Math.floor(y/10);
    }
    }
    return rev===x
};