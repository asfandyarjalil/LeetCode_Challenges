function monotonicDecreasing(nums) {
  let stack = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      stack.pop();
    }
    // if (stack.length) {
    //   result.push(stack[stack.length - 1]);
    // } else {
    //   result.push(-1);
    // }
    stack.push(nums[i]);
  }
  console.log(stack);
  return stack;
}
let nums = [1, 4, 5, 2, 8, 3];
let result = monotonicDecreasing(nums);
console.log("Monotonic decreasing stack:", result);
