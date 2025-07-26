//TODO
// var isValid = function (s) {
//     if (s.length % 2 !== 0) return false;
//     const stack = [];
//     let map = {
//         '(': ')',
//         '{': '}',
//         '[': ']',
//     };

//     for (let char of s) {
//         if (char in map) {
//             stack.push(map[char]);
//         } else {
//             if (stack.length === 0 || stack.pop() !== char) {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// };
var isValid = function (s) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for (let char of s) {
        console.log(char);
        if (char in map) {
            stack.push(map[char]);
        } else {
            if (stack.length === 0 || stack.pop() !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
let s = '([])';
let resp = isValid(s);
console.log(resp);
