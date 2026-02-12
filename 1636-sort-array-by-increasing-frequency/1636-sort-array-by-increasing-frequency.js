/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let map = new Map();
    for(let num of nums){
        map.set(num,(map.get(num) || 0)+1);
    }
    nums.sort((a,b)=>{
        let fa = map.get(a);
        let fb = map.get(b);

        if(fa!==fb){
            return fa-fb
        }
        return b-a;
    })
    return nums;
};