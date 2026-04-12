/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows===1 || s.length<numRows){
        return s;
    }
    let direction = false;
    let rows=0;
    let resArr = new Array(numRows).fill(""); //["p","aplsiig",""]
    for(let char of s){
        resArr[rows]+=char;
        if(rows===0 || rows>=numRows-1) direction=!direction;
        direction ? rows++ : rows--;
    }
    return resArr.join('');
};