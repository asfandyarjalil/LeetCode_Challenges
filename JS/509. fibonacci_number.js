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

const res = fib(4);
console.log(res);
