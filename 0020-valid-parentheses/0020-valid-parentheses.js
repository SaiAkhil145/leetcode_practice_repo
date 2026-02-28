/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stk = [];
    for(let char of s){
        if(char === "(" || char==="{" || char==="["){
            stk.push(char);
        }else{
            if(!stk.length){
                return false;
            }
            let ch = stk.pop();
            if((ch==="(" && char===")" )
               || (ch==="{" && char==="}")
               || (ch==="[" && char==="]")){
                continue;
            }else{
                return false;
            }
        }

    }
    return stk.length===0;
};