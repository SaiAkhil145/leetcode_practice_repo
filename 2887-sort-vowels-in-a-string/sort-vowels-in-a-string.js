/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    // function for checking vowel
    const isVowel = (ch)=> 'aeiouAEIOU'.includes(ch);
    // split the string into array
    let arr = s.split('')
    let vowels = [];
    for(let ch of arr){
        if(isVowel(ch)) vowels.push(ch);
    }
    vowels.sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0));

    let i=0;
    for(let j=0;j<arr.length;j++){
        if(isVowel(arr[j])){
            arr[j]=vowels[i];
            i++;
        }
    }
    return arr.join('');
};