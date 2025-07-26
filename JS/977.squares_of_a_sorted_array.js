// TODO
var sortedSquares = function (nums) {
    return nums.map((num) => num * num).sort((a, b) => a - b);
};

var sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = [];

    while (left <= right) {
        let leftSq = nums[left] * nums[left];
        let rightSq = nums[right] * nums[right];

        if (leftSq > rightSq) {
            result.unshift(leftSq);
            left++;
        } else {
            result.unshift(rightSq);
            right--;
        }
    }

    return result;
};

let nums = [-4, -1, 0, 3, 10];
let resp = sortedSquares(nums);
console.log(resp);
