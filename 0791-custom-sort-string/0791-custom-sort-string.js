/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let res = [];
    let freq = {};
    // freq map for s elements
    for(let ch of s){
        freq[ch]=(freq[ch] || 0)+1;
    }
    // adding characters in order
    for(let ch of order){

        if(freq[ch]){
            let count = freq[ch];
            while(count>0){
                res.push(ch);
                count--;
            }
            delete freq[ch];
        }
    }
    for(let ch in freq){
        let count = freq[ch];
        while(count>0){
            res.push(ch);
            count--;
        }
    }
    return res.join('');
};