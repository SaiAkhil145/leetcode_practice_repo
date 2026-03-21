/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let j=0;
    let result="";
    for(let i=0;i<s.length;i++){
        if(j<spaces.length && i===spaces[j]){
            result+=" ";
            j++;
        }
        result+=s[i];
    }
    return result;
};