/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
    let res = [];
    let map = new Map();
    for(let num of nums){
        map.set(num,(map.get(num) || 0)+1);
    }
    for(let num of nums){
        if(map.get(num)===1 && (!map.has(num-1) && !map.has(num+1))){
            res.push(num);
        }
    }
    return res;
};