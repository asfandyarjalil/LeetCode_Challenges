function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    throw new Error('No two sum solution found');
}

// Example Usage:
const nums = [3, 2, 4];
const target = 6;
console.log(twoSum(nums, target));
