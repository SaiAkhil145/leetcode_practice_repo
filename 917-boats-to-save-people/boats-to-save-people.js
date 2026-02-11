/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b)=>a-b);
    let left=0,right=people.length-1,boats=0;
    while(left<=right){
        if(people[left]+people[right]<=limit){
            left++;
        }
        right--;
        boats++;
    }
    return boats;
};