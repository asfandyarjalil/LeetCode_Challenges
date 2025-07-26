function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const countS = Array(26).fill(0); // For string `s`
    const countT = Array(26).fill(0); // For string `t`

    for (let i = 0; i < s.length; i++) {
        const indexS = s.charCodeAt(i) - 97; // 'a' = 97 in ASCII
        const indexT = t.charCodeAt(i) - 97;
        countS[indexS]++; // Increment for `s`
        countT[indexT]++; // Increment for `t`
    }

    for (let i = 0; i < 26; i++) {
        if (countS[i] !== countT[i]) {
            return false; // Mismatch found
        }
    }
    return true; // All characters match
}

const s = 'listen';
const t = 'silent';
console.log(isAnagram(s, t)); // Output: true

const s2 = 'hello';
const t2 = 'world';
console.log(isAnagram(s2, t2)); // Output: false
