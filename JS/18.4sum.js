// TODO
// var fourSum = function (nums, target) {
//     nums.sort((a, b) => a - b);
//     const result = [];
//     for (let i = 0; i < nums.length - 3; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;
//         for (let j = i + 1; j < nums.length - 2; j++) {
//             if (j > i + 1 && nums[j] === nums[j - 2]) continue;
//             let leftP = j + 1;
//             let rightP = nums.length - 1;
//             while (leftP < rightP) {
//                 const sum = nums[i] + nums[j] + nums[leftP] + nums[rightP];
//                 if (sum === target) {
//                     result.push([nums[i], nums[j], nums[leftP] + nums[rightP]]);
//                     // Skip duplicate values for the third element
//                     while (leftP < rightP && nums[leftP] === nums[leftP + 1]) leftP++;
//                     // Skip duplicate values for the fourth element
//                     while (leftP < rightP && nums[rightP] === nums[rightP - 1]) rightP--;

//                     leftP++;
//                     rightP--;
//                 } else if (sum < target) {
//                     leftP++;
//                 } else {
//                     rightP--;
//                 }
//             }
//         }
//     }
//     return result;
// };

// function fourSum(nums, target) {
//     const result = [];
//     const n = nums.length;

//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < n - 3; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;

//         for (let j = i + 1; j < n - 2; j++) {
//             if (j > i + 1 && nums[j] === nums[j - 1]) continue;

//             let left = j + 1;
//             let right = n - 1;

//             while (left < right) {
//                 const sum = nums[i] + nums[j] + nums[left] + nums[right];

//                 if (sum === target) {
//                     result.push([nums[i], nums[j], nums[left], nums[right]]);

//                     while (left < right && nums[left] === nums[left + 1]) left++;

//                     while (left < right && nums[right] === nums[right - 1]) right--;

//                     left++;
//                     right--;
//                 } else if (sum < target) {
//                     left++;
//                 } else {
//                     right--;
//                 }
//             }
//         }
//     }

//     return result;
// }

// Output: [[-2, -1, 1, 2], [-2, 0, 0, 2]]
function fourSum(nums, target) {
    let result = [];
    let n = nums.length;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let start = j + 1;
            let end = n - 1;

            while (start < end) {
                let sum = nums[i] + nums[j] + nums[start] + nums[end];
                console.log({ sum });
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[start], nums[end]]);
                    while (start < end && nums[start] === nums[start + 1]) start++;
                    while (start < end && nums[end] === nums[end - 1]) end--;
                    start++;
                    end--;
                } else if (sum < target) {
                    start++;
                } else {
                    end--;
                }
            }
        }
    }
    return result;
}

function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    let result = 0;

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let start = j + 1;
            let end = nums.length - 1;

            while (start < end) {
                let sum = nums[i] + nums[j] + nums[start] + nums[end];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[start], nums[end]]);

                    while (start < end && nums[start] === nums[start + 1]) continue;
                    while (start < end && nums[end] === nums[end - 1]) continue;
                    start++;
                    end--;
                } else if (sum < target) {
                    start++;
                } else {
                    end--;
                }
            }
        }
    }
    return result;
}
let nums = [1, 0, -1, 0, -2, 2],
    target = 0;
const resp = fourSum(nums, target);
console.log(resp);
