/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const isLetter = (ch)=> /[a-zA-Z]/.test(ch);
    let left=0,right=s.length-1;
    let arr = s.split('');
    while(left<right){

        // check if there any letter present in the left
        while(left<right && !isLetter(arr[left])){
            left++;
        }
        while(left<right && !isLetter(arr[right])){
            right--;
        }
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++;
        right--;
    }
    return arr.join('');
};