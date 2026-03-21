/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function(s, k) {
    let count = 1;
    let current = 0;

    for (let ch of s) {
        let digit = Number(ch);

        if (digit > k) return -1;

        let next = current * 10 + digit;

        if (next <= k) {
            current = next;
        } else {
            count++;
            current = digit;
        }
    }

    return count;
};