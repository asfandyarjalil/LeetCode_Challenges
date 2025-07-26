//  TODO
var evalRPN = function (tokens) {
    let stack = [];

    for (let token of tokens) {
        if (token === '+') {
            let num2 = stack.pop();
            let num1 = stack.pop();
            stack.push(num1 + num2);
        } else if (token === '-') {
            let num2 = stack.pop();
            let num1 = stack.pop();
            stack.push(num1 - num2);
        } else if (token === '*') {
            let num2 = stack.pop();
            let num1 = stack.pop();
            stack.push(num1 * num2);
        } else if (token === '/') {
            let num2 = stack.pop();
            let num1 = stack.pop();
            // Perform integer division and truncate toward zero
            let ans = num1 / num2;
            stack.push(Math.trunc(ans)); // Use Math.trunc to truncate toward zero
        } else {
            // If it's a number, parse it and push onto the stack
            stack.push(parseInt(token));
        }
    }

    // The result should be the last remaining item in the stack
    return stack.pop();
};

let tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];

console.log(evalRPN(tokens));
