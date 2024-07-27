// Brute force
// var trap = function (height) {
//     let totalWater = 0;
//     for (let p = 0; p < height.length; p++) {
//         let leftP = p,
//             rightP = p,
//             maxLeft = 0,
//             maxRight = 0;
//         while (leftP >= 0) {
//             maxLeft = Math.max(maxLeft, height[leftP]);
//             leftP--;
//         }
//         while (rightP < height.length) {
//             maxRight = Math.max(maxRight, height[rightP]);
//             rightP++;
//         }

//         const currentWater = Math.min(maxLeft, maxRight) - height[p];
//         if (currentWater >= 0) {
//             totalWater += currentWater; // add water to the total
//         }
//     }
//     return totalWater; // return the total amount of water trapped.
// };

let trap = function (height) {
    let left = 0,
        right = height.length - 1,
        totalWater = 0,
        maxLeft = 0,
        maxRight = 0;
    while (left < right) {
        if (height[left] <= height[right]) {
            if (height[left] > maxLeft) {
                maxLeft = height[left];
            } else {
                totalWater += maxLeft - height[left];
            }
            left++;
        } else {
            if (height[right] >= maxRight) {
                maxRight = height[right];
            } else {
                totalWater += maxRight - height[right];
            }
            right--;
        }
    }
    return totalWater;
};

const height = [4, 2, 0, 3, 2, 5];

let resp = trap(height);
console.log(resp);
