/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let map = new Map();
    let left=0,maxLen=0
    for(let right=0;right<fruits.length;right++){
        let rightFruit = fruits[right];
        map.set(rightFruit,(map.get(rightFruit) || 0)+1);

        while(map.size>2){
            let leftFruit = fruits[left];
            map.set(leftFruit,(map.get(leftFruit)-1));
            if(map.get(leftFruit)===0){
                map.delete(leftFruit)
            }
            left++;
        }
        maxLen=Math.max(maxLen,right-left+1);
    }
    return maxLen;
};