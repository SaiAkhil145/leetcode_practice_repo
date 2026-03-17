/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function(bulbs) {
    let map = new Map();
    for(let bulb of bulbs){
        if(!map.has(bulb)){
            map.set(bulb,true);
        }else{
            map.set(bulb,!map.get(bulb));
        }
    }
    let res = [];
    for(let [key,value] of map){
        if(value){
            res.push(key)
        }
    }
    return res.sort((a,b)=>a-b);
};