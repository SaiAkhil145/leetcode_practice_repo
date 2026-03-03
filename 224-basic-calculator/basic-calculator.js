/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stk=[];
    let result=0;
    let sign=1;
    let number=0;
    for(let char of s){
        if(!isNaN(char) &&  char!==' '){
            number = number*10+Number(char);
        }else if(char==="+"){
            result+=sign*number;
            number=0;
            sign=1;
        }else if(char==='-'){
            result+=sign*number;
            number=0;
            sign=-1;
        }else if(char==='('){
            stk.push(result);
            stk.push(sign);
            result=0;
            sign=1;
        }else if(char===')'){
            result+=sign*number;
            number=0;
            result*=stk.pop();
            result+=stk.pop();
        }

    }
    return result+sign*number;
};