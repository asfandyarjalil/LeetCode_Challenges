var mySqrt = function (x) {
    let start = 0;
    let end = x;
    let mid;

    for (let i = 0; i < x; i++) {
        mid = Math.floor((start + end) / 2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            result = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return result;
};

console.log(mySqrt(8));
