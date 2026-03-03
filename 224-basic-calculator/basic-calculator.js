/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let number=0,result=0,sign=1;
    let stk=[];
    for(let char of s){
        if(!isNaN(char) && char!==' '){
            number = number*10+Number(char);
        }else if(char==='+'){
            result+=sign*number;
            sign=1;
            number=0;
        }else if(char==='-'){
            result+=sign*number;
            sign=-1;
            number=0;
        }else if(char==='('){
            stk.push(result);
            stk.push(sign);
            result=0;
            sign=1;
        }else if(char===')'){
            result+=sign*number;
            number=0;
            result*=stk.pop(); //sign
            result+=stk.pop(); //number;
        }
    }
    return result+sign*number;
};