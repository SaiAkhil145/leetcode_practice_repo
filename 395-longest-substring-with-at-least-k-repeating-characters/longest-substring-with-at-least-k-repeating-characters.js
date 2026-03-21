/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    if (s.length === 0) return 0;

    let freq = new Map();

    // count frequency
    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    // find invalid character
    for (let i = 0; i < s.length; i++) {
        if (freq.get(s[i]) < k) {
            let left = longestSubstring(s.slice(0, i), k);
            let right = longestSubstring(s.slice(i + 1), k);
            return Math.max(left, right);
        }
    }

    // all valid
    return s.length;
};