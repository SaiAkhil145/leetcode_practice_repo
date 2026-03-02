/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(ops) {
    let stk = [];
    for(let i=0;i<ops.length;i++){
        let curr = ops[i];
        if(!isNaN(curr)){
            stk.push(parseInt(curr));
        }else if(curr==='C'){
            stk.pop();
        }else if(curr==='D'){
            stk.push(2*stk[stk.length-1]);
        }else if(curr==="+"){
            stk.push(stk[stk.length-1]+stk[stk.length-2]);
        }
    }
    return stk.reduce((acc,val)=>acc+val,0);
};