// TODO solve againin future
// var threeSum = function (nums) {
//     const result = [];
//     let currentSum = 0;

//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length - 2; i++) {
//         // Skip duplicate values of nums[i]
//         if (i > 0 && nums[i] === nums[i - 1]) continue;

//         let leftP = i + 1,
//             rightP = nums.length - 1;
//         while (leftP < rightP) {
//             currentSum = nums[i] + nums[leftP] + nums[rightP];
//             if (currentSum === 0) {
//                 result.push([nums[i], nums[leftP], nums[rightP]]);
//                 // Skip duplicate values of nums[leftP]
//                 while (leftP < rightP && nums[leftP] === nums[leftP + 1]) leftP++;
//                 // Skip duplicate values of nums[rightP]
//                 while (leftP < rightP && nums[rightP] === nums[rightP - 1]) rightP--;
//                 leftP++;
//                 rightP--;
//             } else if (currentSum < 0) {
//                 leftP++;
//             } else {
//                 rightP--;
//             }
//         }
//     }
//     return result;
// };

// function threeSum(nums) {
//     let result = [];
//     nums.sort((a, b) => a - b);

//     for (let i = 0; i <= nums.length; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;

//         let left = i + 1;
//         let right = nums.length - 1;
//         while (left < right) {
//             let sum = nums[i] + nums[left] + nums[right];
//             if (sum === 0) {
//                 result.push([nums[i], nums[left], nums[right]]);

//                 while (left < right && nums[left] === nums[left + 1]) left++;
//                 while (left < right && nums[right] === nums[right - 1]) right--;

//                 left++;
//                 right--;
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }
//     return result;
// }

function threeSum(nums) {
    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            if (sum === 0) {
                result.push([nums[i], nums[start], nums[end]]);

                while (start < end && nums[start] === nums[start + 1]) continue;
                while (start < end && nums[end] === nums[end - 1]) continue;
                start++;
                end--;
            } else if (sum < 0) {
                start++;
            } else {
                end--;
            }
        }
    }
    return result;
}
// Example usage:
let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
// Output: [[-1, -1, 2], [-1, 0, 1]]
