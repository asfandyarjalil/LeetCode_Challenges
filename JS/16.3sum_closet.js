//  TODO

// function threeSumClosest(nums, target) {
//     nums.sort((a, b) => a - b);
//     const n = nums.length;
//     let closestSum = Infinity;

//     for (let i = 0; i < n - 2; i++) {
//         let left = i + 1;
//         let right = n - 1;

//         while (left < right) {
//             const currentSum = nums[i] + nums[left] + nums[right];

//             if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
//                 closestSum = currentSum;
//             }

//             if (currentSum < target) {
//                 left++;
//             } else if (currentSum > target) {
//                 right--;
//             } else {
//                 return closestSum;
//             }
//         }
//     }

//     return closestSum;
// }

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;

    for (let i = 0; i <= nums.length; i++) {
        let start = i + 1;
        let end = nums.length - 1;

        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }

            if (sum < target) {
                start++;
            } else {
                end--;
            }
        }
    }
    return closestSum;
}

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            } else if (sum < target) {
                start++;
            } else {
                end--;
            }
        }
    }
    return closestSum;
}

const nums = [-1, 2, 1, -4],
    target = 1;

console.log(threeSumClosest(nums, target));
