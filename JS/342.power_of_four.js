var isPowerOfFour = function (n) {
    let answer = 1;
    if (n <= 0) {
        return false;
    }
    while (answer < n) {
        answer = answer * 4;
    }
    return answer === n;
};

// var isPowerOfFour = function (n) {
//     if (n === 1) {
//         return true;
//     }

//     if (n <= 0 || n % 4 !== 0) {
//         return false;
//     }

//     return isPowerOfFour(n / 4);
// };

let n = 16;
const resp = isPowerOfFour(16);
console.log(resp);
