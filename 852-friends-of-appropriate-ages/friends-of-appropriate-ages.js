/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
    ages.sort((a, b) => a - b);
    let n = ages.length;

    let left = 0, right = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (ages[i] < 15) continue; // no valid requests

        // move left pointer
        while (ages[left] <= 0.5 * ages[i] + 7) {
            left++;
        }

        // move right pointer
        while (right < n && ages[right] <= ages[i]) {
            right++;
        }

        count += (right - left - 1); // exclude self
    }

    return count;
};