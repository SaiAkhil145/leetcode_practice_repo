/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let left=0;
    let result=[];
    let valid=0;
    let need = new Map();
    for(let ch of p){
        need.set(ch,(need.get(ch) || 0)+1);
    }
    let window = new Map();
    for(let right=0;right<s.length;right++){
        let c = s[right];

        if(need.has(c)){
            window.set(c,(window.get(c) || 0)+1);
            if(window.get(c)===need.get(c)){
                valid++;
            }
        }
        // shrinking
        while(right-left+1>=p.length){
            if(valid===need.size){
                result.push(left);
            }
            let d = s[left];
            left++;
            if(need.has(d)){
                if(need.get(d)===window.get(d)){
                    valid--;
                }
                window.set(d,window.get(d)-1);
            }
        }
    }
    return result;
};