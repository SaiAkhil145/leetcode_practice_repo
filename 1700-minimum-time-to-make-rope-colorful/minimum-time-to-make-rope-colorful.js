/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let totalTime=0;
    let prevTime=neededTime[0];
    for(let i=1;i<colors.length;i++){
        if(colors[i]===colors[i-1]){
            totalTime+=Math.min(prevTime,neededTime[i]);
            prevTime=Math.max(prevTime,neededTime[i]);
        }else{
            prevTime=neededTime[i];
        }
    }
    return totalTime;
};