var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxSum = sum;

  for (let i = k; i < nums.length; i++) {
    sum = sum + nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, sum);
  }

  return parseFloat((maxSum / k).toFixed(5));
};
function findMaxAverage(nums, k) {
  let sum = 0;

  // Calculate the sum of the first k elements
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  // Initialize maxSum to the sum of the first k elements
  let maxSum = sum;

  // Slide the window and update maxSum
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k]; // Add the next element and remove the first element of the window
    maxSum = Math.max(maxSum, sum); // Update maxSum if needed
  }

  return parseFloat((maxSum / k).toFixed(5)); // Return the maximum average as a float with 5 decimal places
}

let nums = [1, 12, -5, -6, 50, 3],
  k = 4;
const res = findMaxAverage(nums, k);
console.log(res);
