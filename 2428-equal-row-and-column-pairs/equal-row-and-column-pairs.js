/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let n = grid.length;
    let map = new Map();
    for(let row of grid){
        let key = row.join(',');
        map.set(key,(map.get(key) || 0)+1);
    }
    let count=0;
    for(let col=0;col<n;col++){
        let arr = [];
        for(let row=0;row<n;row++){
            arr.push(grid[row][col]);
        }
        let key = arr.join(',');
        if(map.has(key)){
            count+=map.get(key);
        }
    }
    return count;
};