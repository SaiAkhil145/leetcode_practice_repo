/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    let up=1,down=1,maxLen=1;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>arr[i-1]){
            up=down+1;
            down=1;
        }else if(arr[i-1]>arr[i]){
            down=up+1;
            up=1;
        }else{
            up=down=1;
        }
        maxLen=Math.max(maxLen,up,down);
    }
    return maxLen;

};