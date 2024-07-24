// var removeStars = function (s) {
//   s = s.split("");
//   let i = 0;

//   while (s.indexOf("*") !== -1) {
//     let index = s.indexOf("*");
//     s.splice(index - 1, 2);
//   }

//   return s.join("");
// };

// let removeStars = function (s) {
//   let result = "";
//   for (let i in s) {
//     if (s[i] === "*" && i > 0 && s[i - 1] !== 0) {
//       result = result.slice(0, -1);
//     } else if (s[i] !== "*") {
//       result += s[i];
//     }
//   }
//   return result;
// };

let removeStars = function (s) {
  let stack = [];
  for (let i of s) {
    if (i !== "*") stack.push(i);
    else stack.pop();
  }
  return stack.join("");
};
let s = "leet**cod*e";
const res = removeStars(s);
console.log(res);
