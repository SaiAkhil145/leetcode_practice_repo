/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stk = [];
    let currString="",currNumber=0;
    for(let char of s){
        if(!isNaN(char)){
            currNumber = currNumber*10+Number(char);
        }else if(char==='['){
            stk.push([currString,currNumber]);
            currString="";
            currNumber=0;
        }else if(char==="]"){
            let [prevString,num]=stk.pop();
            currString = prevString+currString.repeat(num);
        }else{
            currString+=char;
        }
    }
    return currString;
};