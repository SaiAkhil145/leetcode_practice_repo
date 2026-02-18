/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    let freq = new Array(26).fill(0);

    for(let i=0;i<word.length;i++){
        let idx = word.charCodeAt(i)-97;
        freq[idx]++;
    }

    for(let i=0;i<word.length;i++){
        let idx = word.charCodeAt(i)-97;
        freq[idx]--;

        const set = new Set();
        for(let f of freq){
            if(f>0) set.add(f);
        }

        if(set.size===1) return true;
        freq[idx]++;
    }
    return false;
};