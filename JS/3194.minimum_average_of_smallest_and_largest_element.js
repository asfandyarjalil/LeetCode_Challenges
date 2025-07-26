var minimumAverage = function (nums) {
    nums.sort((a, b) => a - b);
    let averages = [];
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        let sum = nums[start] + nums[end];
        averages.push(sum / 2);
        start++;
        end--;
    }

    return Math.min(...averages);
};

let nums = [7, 8, 3, 4, 15, 13, 4, 1];
let resp = minimumAverage(nums);
console.log(resp);
