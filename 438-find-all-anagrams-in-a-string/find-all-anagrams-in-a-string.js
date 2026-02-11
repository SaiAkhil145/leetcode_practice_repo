/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let left=0;
    let valid =0;
    let res = [];
    let need = new Map();
    // making frequancy map for p values;
    for(let ch of p){
        need.set(ch,(need.get(ch) || 0)+1);
    }
    // iterating the s string from start to end.
    // map for storing anagram values in s
    let window = new Map();
    for(let right=0;right<s.length;right++){
        let c = s[right];
        if(need.has(c)){
            window.set(c,(window.get(c) || 0)+1);
            // increment the valid count if the frequancy of value in window matches with need map.
            if(window.get(c)===need.get(c)){
                valid++;
            }
        }

        // shrink
        while(right-left+1>=p.length){
            if(valid===need.size){
                res.push(left);
            }
            let d = s[left];
            left++;
            if(need.has(d)){
                if(need.get(d)===window.get(d)){
                    valid--;
                }
                window.set(d,(window.get(d)-1));
            }
        }
        

    }
    return res;
    
};