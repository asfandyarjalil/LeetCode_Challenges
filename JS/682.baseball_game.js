var calPoints = function (operations) {
    let scores = [];
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '+') {
            let sum = scores[scores.length - 1] + scores[scores.length - 2];
            scores.push(sum);
        } else if (operations[i] === 'D') {
            let doubleScore = scores[scores.length - 1] * 2;
            scores.push(doubleScore);
        } else if (operations[i] === 'C') {
            scores.pop();
        } else {
            scores.push(Number(operations[i]));
        }
    }
    return scores.reduce((acc, curr) => acc + curr, 0);
};

let ops = ['5', '2', 'C', 'D', '+'];
let resp = calPoints(ops);
console.log(resp);
