// var reverseVowels = function (s) {
//     let vowels = {
//         a: "a",
//         e: "e",
//         i: "i",
//         o: "o",
//         u: "u",
//         A: "A",
//         E: "E",
//         I: "I",
//         O: "O",
//         U: "U",
//     };
//     let vowelsArr = [];

//     s = s.split("");
//     for (let i = 0; i < s.length; i++) {
//         if (vowels[s[i]]) {
//             vowelsArr.push(s[i]);
//             s[i] = "--";
//         }
//     }
//     vowelsArr = vowelsArr.reverse();
//     for (let i = 0; i < vowelsArr.length; i++) {
//         let index = s.indexOf("--");
//         s[index] = vowelsArr[i];
//     }
//     return s.join("");
// };

var reverseVowels = function (s) {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    let left = 0,
        right = s.length - 1;
    const sArr = s.split("");

    while (left < right) {
        while (left < right && !vowels.has(sArr[left])) {
            left++;
        }
        while (left < right && !vowels.has(sArr[right])) {
            right--;
        }
        if (left < right) {
            // Swap vowels
            [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
            left++;
            right--;
        }
    }

    return sArr.join("");
};

let s = "hello";
const result = reverseVowels(s);
console.log(result);
