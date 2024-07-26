//  Brute force solution
// var maxArea = function (height) {
//     if (height.length === 0 || height.length === 1) {
//         return 0;
//     }
//     let maxArea = 0;
//     for (let i = 0; i < height.length; i++) {
//         for (let j = 1; j < height.length; j++) {
//             let minHeight = Math.min(height[i], height[j]);
//             let area = minHeight * (j - i);
//             maxArea = Math.max(area, maxArea);
//         }
//     }
//     return maxArea;
// };

var maxArea = function (height) {
    if (height.length === 0 || height.length === 1) {
        return 0;
    }
    let maxArea = 0;
    let ptrA = 0;
    let ptrB = height.length - 1;
    while (ptrA < ptrB) {
        let minHeight = Math.min(height[ptrA], height[ptrB]);
        let width = ptrB - ptrA;
        let area = minHeight * width;
        maxArea = Math.max(area, maxArea);

        if (height[ptrA] < height[ptrB]) {
            ptrA++;
        } else {
            ptrB--;
        }
    }
    return maxArea;
};

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

let res = maxArea(height);
console.log(res);
