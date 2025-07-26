function findFactorialusingRecursiveFunction(n) {
    if (n === 1) {
        return n;
    }
    return n * findFactorialusingRecursiveFunction(n - 1);
}

function findFactorialUsingIterativeFunction(n) {
    let sum = 1;
    for (let i = 1; i <= n; i++) {
        sum = sum * i;
    }
    return sum;
}

const recur = findFactorialusingRecursiveFunction(7);
const iter = findFactorialUsingIterativeFunction(7);
console.log(iter, recur);
