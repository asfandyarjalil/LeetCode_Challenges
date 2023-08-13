var sumOfMultiples = function (n) {
    let sumOfAllResult = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            sumOfAllResult += i;
        }
    }
    return sumOfAllResult;
};

let result = sumOfMultiples(7);

console.log(result);
