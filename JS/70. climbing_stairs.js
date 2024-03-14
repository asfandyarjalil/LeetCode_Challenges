var fib = function (n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let arr = [0, 1];
  let sum;
  for (i = 2; i <= n; i++) {
    sum = arr[i - 1] + arr[i - 2];
    arr.push(sum);
  }
  return sum;
};
var climbStairs = function (n) {
  let res = fib(n + 1);
  return res;
};

let res = climbStairs(3);
console.log(res);

// console.log(res);
