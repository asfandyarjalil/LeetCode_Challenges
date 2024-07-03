// var maxOperations = function (nums, k) {
//   let operations = 0;
//   let previousOperations = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (operations > previousOperations) {
//       previousOperations = operations;
//       i = 0;
//     }
//     for (let j = 1; j < nums.length; j++) {
//       const currentSum = nums[i] + nums[j];
//       let iNum = nums[i];
//       let jNum = nums[j];
//       if (currentSum === k && i !== j) {
//         let findIIndex = nums.indexOf(iNum);
//         nums.splice(findIIndex, 1);

//         let findJIndex = nums.indexOf(jNum);
//         console.log({ findIIndex, findJIndex });
//         nums.splice(findJIndex, 1);

//         operations++;
//       }
//     }
//   }

//   return operations;
// };
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b); // Sort the array

  let left = 0;
  let right = nums.length - 1;
  let operations = 0;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === k) {
      operations++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return operations;
};

let nums = [3, 1, 3, 4, 3],
  k = 5;
const res = maxOperations(nums, k);
console.log(res);
