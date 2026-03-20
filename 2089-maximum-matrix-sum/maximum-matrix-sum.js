/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let sum=0;
    let minVal=Infinity;
    let negCount=0;
    for(let rows of matrix){
        for(let num of rows){
            if(num<0) negCount++;

            let absValue = Math.abs(num);
            sum+=absValue;
            minVal=Math.min(minVal,absValue);
        }
    }
    if(negCount%2===1){
        sum-=2*minVal;
    }
    return sum;
};