// TODO
var findClosestNumber = function (nums) {
    // Initialize closestNumber to the first element in the array
    let closestNumber = nums[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Check if the current number is closer to 0 than the current closestNumber
        if (Math.abs(nums[i]) < Math.abs(closestNumber)) {
            closestNumber = nums[i];
        }
        // If the current number is equally close to 0 but larger, take the larger one
        else if (Math.abs(nums[i]) === Math.abs(closestNumber) && nums[i] > closestNumber) {
            closestNumber = nums[i];
        }
    }

    // Return the number closest to 0
    return closestNumber;
};

let nums = [-100000, -100000];
let res = findClosestNumber(nums);
console.log(res);
