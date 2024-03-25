// var longestOnes = function (nums, k) {
//   let flips = 0;
//   let consectives = 0;
//   let maxConsective = 0;
//   for (let i = 0; i < nums.length; i++) {
//     consectives = 0;
//     flips = 0;
//     for (let j = i; j < nums.length; j++) {
//       if (flips !== k) {
//         if (nums[j] === 1) {
//           consectives++;
//         }

//         if (nums[j] === 0) {
//           consectives++;
//           flips++;
//         }
//       }
//     }

//     maxConsective = Math.max(maxConsective, consectives);
//   }
//   return maxConsective;
// };

var longestOnes = function (nums, k) {
  let left = 0;
  let maxLength = 0;
  let zerosCount = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zerosCount++;
    }

    while (zerosCount > k) {
      if (nums[left] === 0) {
        zerosCount--;
      }
      left++;
    }

    // Update the maximum length of consecutive ones
    maxLength = Math.max(maxLength, right - left + 1);
    console.log({ zerosCount, right, left, maxLength });
  }

  return maxLength;
};

let nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
  k = 3;
const result = longestOnes(nums, k);
console.log(result);
