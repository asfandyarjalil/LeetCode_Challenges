var runningSum = function (nums) {
    let sum = 0;
    let results = [];
    for (let i in nums) {
        sum = sum + nums[i];
        results.push(sum);
    }
    return results;
};

const runningSum = function (nums) {
    for (let i = 1, len = nums.length; i < len; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};
