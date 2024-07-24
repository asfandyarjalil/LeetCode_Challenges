// var decodeString = function (s) {
//   s = s.split("");

//   let str = "";
//   let strrr = "";
//   let n = 0;
//   let bracketOpen = false,
//     bracketClose = false;
//   let se = new Set(["[", "]"]);
//   //   console.log(se);
//   for (let i = 0; i < s.length; i++) {
//     if (!isNaN(s[i])) {
//       n = parseInt(s[i]);
//     }

//     if (se.has(s[i]) && s[i] === "[") {
//       bracketOpen = true;
//     }
//     if (se.has(s[i]) && s[i] === "]") {
//       bracketClose = true;
//     }
//     if (!se.has(s[i]) && bracketOpen && isNaN(s[i])) {
//       str = str + s[i];
//     }
//     if (bracketOpen && bracketClose) {
//       strrr = strrr + multiplyString(n, str);
//     }
//   }
//   return strrr;
// };

// function multiplyString(n, s) {
//   let res = "";
//   for (let i = 0; i < n; i++) {
//     res = res + s;
//   }
//   return res;
// }

var decodeString = function (s) {
  const stack = [];

  for (let char of s) {
    if (char !== "]") {
      stack.push(char);
    } else {
      let substring = "";
      let repeatCount = "";

      while (stack[stack.length - 1] !== "[") {
        substring = stack.pop() + substring;
      }

      stack.pop();

      while (!isNaN(stack[stack.length - 1])) {
        repeatCount = stack.pop() + repeatCount;
      }

      substring = substring.repeat(parseInt(repeatCount));
      stack.push(substring);
    }
  }

  // Concatenate all the characters in the stack to get the decoded string
  return stack.join("");
};

let s = "3[a]2[bc]";
let res = decodeString(s);
console.log(res);
