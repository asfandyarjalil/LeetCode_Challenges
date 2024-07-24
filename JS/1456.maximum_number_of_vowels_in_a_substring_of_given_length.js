// var maxVowels = function (s, k) {
//   s = s.split("");

//   let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
//   let subStr = [];
//   let nVowels = 0;
//   for (let i = 0; i < k; i++) {
//     if (vowels.has(s[i])) {
//       nVowels++;
//     }
//     subStr.push(s[i]);
//   }

//   let maxVowels = nVowels;
//   for (let i = k; i < s.length; i++) {
//     nVowels = 0;
//     subStr.push(s[i]);
//     subStr.shift();
//     console.log(subStr);
//     for (let j = 0; j < subStr.length; j++) {
//       if (vowels.has(subStr[j])) {
//         nVowels++;
//       }
//     }
//     maxVowels = Math.max(maxVowels, nVowels);
//     console.log({ maxVowels });
//   }
//   return maxVowels;
// };

var maxVowels = function (s, k) {
  s = s.split("");

  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let maxVowels = 0;
  let currentVowels = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      currentVowels++;
    }
  }

  maxVowels = currentVowels;
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) {
      currentVowels++;
    }
    if (vowels.has(s[i - k])) {
      currentVowels--;
    }
    maxVowels = Math.max(maxVowels, currentVowels);
  }
  return maxVowels;
};

let s = "abciiidef",
  k = 3;
const res = maxVowels(s, k);
console.log(res);
