/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if (word.length < 3) return false;

    let vowels = new Set(['a','e','i','o','u']);
    let hasVowel = false;
    let hasConsonant = false;

    for (let ch of word) {
        let c = ch.toLowerCase();

        if (!(/[a-z0-9]/.test(c))) return false;

        if (vowels.has(c)) {
            hasVowel = true;
        } else if (c >= 'a' && c <= 'z') {
            hasConsonant = true;
        }
    }

    return hasVowel && hasConsonant;
};