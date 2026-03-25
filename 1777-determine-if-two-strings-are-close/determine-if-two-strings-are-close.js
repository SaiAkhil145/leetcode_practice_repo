/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length!==word2.length) return false;
    let count1=new Map();
    let count2=new Map();
    for(let char of word1){
        count1.set(char,(count1.get(char) || 0)+1);
    }
    for(let char of word2){
        count2.set(char,(count2.get(char) || 0)+1);
    }
    let key1 = [...count1.keys()].sort().join('');
    let key2 = [...count2.keys()].sort().join('');
    if(key1!==key2) return false;

    let freq1 = [...count1.values()].sort((a,b)=>a-b);
    let freq2 = [...count2.values()].sort((a,b)=>a-b);

    return JSON.stringify(freq1)===JSON.stringify(freq2);

}