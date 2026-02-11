/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length>s2.length) return false;
    let left=0,valid=0;
    let need = new Map();
    for(let ch of s1){
        need.set(ch,(need.get(ch) || 0)+1);
    }
    let window = new Map();
    for(let right=0;right<s2.length;right++){
        let c = s2[right];
        if(need.has(c)){
            window.set(c,(window.get(c) || 0)+1);
            if(need.get(c)===window.get(c)){
                valid++;
            }
        }
        while(right-left+1>=s1.length){

            if(valid===need.size){
                return true;
            }

            let d = s2[left];
            left++;
            if(need.has(d)){
                if(need.get(d)===window.get(d)){
                    valid--;
                }
                window.set(d,window.get(d)-1);
            }
        }
    }
    return false;
};