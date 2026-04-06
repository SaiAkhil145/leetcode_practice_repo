/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const lastIndex = {};
    for(let i=0;i<s.length;i++){
        lastIndex[s[i]]=i;
    }
    const stk = [];
    const seen = new Set();
    for(let i=0;i<s.length;i++){
        let ch = s[i];
        if(seen.has(ch)){
            continue;
        }
        while(stk.length && ch<stk[stk.length-1] && lastIndex[stk[stk.length-1]]>i){
            seen.delete(stk.pop());
        }
        stk.push(ch);
        seen.add(ch);
    }
    return stk.join('');
};