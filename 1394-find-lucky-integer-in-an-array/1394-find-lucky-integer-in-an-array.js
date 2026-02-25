/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let map = new Map();
    for(let num of arr){
        map.set(num,(map.get(num) || 0)+1);
    }
    let max=-1;
    for(let num of arr){
        if(map.get(num)===num){
            if(num>max){
                max=num;
            }
        }
    }
    return max;
};