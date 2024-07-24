function monotonicIncreasing(nums) {
  const stack = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] > nums[i]) {
      stack.pop();
    }

    stack.push(nums[i]);
  }
  console.log(stack);
  // while (stack.length > 0) {
  //   result.unshift(stack.pop());
  // }
  return stack;
}

var dailyTemperatures = function (temperatures) {
  let n = temperatures.length;
  let stack = [];
  let result = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      let tailIndex = stack.pop();
      result[tailIndex] = i - tailIndex;
    }
    stack.push(i);
  }
  return result;
};

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
const res = dailyTemperatures(temperatures);
console.log(res);
