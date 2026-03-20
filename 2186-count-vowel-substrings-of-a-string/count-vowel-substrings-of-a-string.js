/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    let isVowel = (c)=>"aeiou".includes(c);
    let total=0;
    for(let i=0;i<word.length;i++){
        let set = new Set();
        for(let j=i;j<word.length;j++){
            if(!isVowel(word[j])) break;
            set.add(word[j]);
            if(set.size===5){
                total++;
            }
        }
    }
    return total;
};