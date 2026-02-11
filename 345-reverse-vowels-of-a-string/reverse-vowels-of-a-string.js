/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(str) {
    const isVowel = (ch)=>"aeiouAEIOU".includes(ch);
    let s = str.split('');
    let start=0,end=s.length-1;
    while(start<=end){
        if(isVowel(s[start]) && isVowel(s[end])){
            [s[start],s[end]]=[s[end],s[start]];
            start++;
            end--;
        }else if(!isVowel(s[start])){
            start++;
        }else{
            end--;
        }
    }
    return s.join('');
};