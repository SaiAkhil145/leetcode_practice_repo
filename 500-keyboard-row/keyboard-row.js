/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let rowMap = {};
    for(let ch of "qwertyuiop") rowMap[ch]=1;
    for(let ch of "asdfghjkl") rowMap[ch]=2;
    for(let ch of "zxcvbnm") rowMap[ch]=3;
    let res = [];
    for(let word of words){
        let lower = word.toLowerCase();
        let row = rowMap[lower[0]];
        let valid=true;
        for(let ch of lower){
            if(rowMap[ch]!==row){
                valid=false;
                break;
            } 
            
        }
        if(valid) res.push(word);
    }
    return res;
};