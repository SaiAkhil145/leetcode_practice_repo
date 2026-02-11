/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let left=0,start=0,minLen=Infinity,valid=0;
    let need = new Map();
    for(let ch of t){
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
        while(valid===need.size){
            if(right-left+1<minLen){
                minLen=right-left+1;
                start=left;
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
    return minLen===Infinity ? "" : s.substring(start,start+minLen)
};