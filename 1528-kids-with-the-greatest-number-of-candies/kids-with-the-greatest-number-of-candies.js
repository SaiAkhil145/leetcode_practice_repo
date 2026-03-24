/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let res = [];
    let max = Math.max(...candies);
    for(let num of candies){
        let total = num+extraCandies;
        if(total>=max){
            res.push(true);
        }else{
            res.push(false);
        }
    }
    return res;
};