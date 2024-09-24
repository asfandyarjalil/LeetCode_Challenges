var isPowerOfTwo = function (n) {
    let answer = 1;
    if (n <= 0) {
        return false;
    }
    while (answer < n) {
        answer = answer * 2;
    }
    return answer === n;
};

var isPowerOfTwo = function (n) {
    if (n === 1) {
        return true;
    }

    if (n <= 0 || n % 2 !== 0) {
        return false;
    }

    return isPowerOfTwo(n / 2);
};

let n = 16;
const resp = isPowerOfTwo(16);
console.log(resp);
