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

let nums = [1, 3, 4, 5, 2, 9, 6];

const res = monotonicIncreasing(nums);
console.log(res);
