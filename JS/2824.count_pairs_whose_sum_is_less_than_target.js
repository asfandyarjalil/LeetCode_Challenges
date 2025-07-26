var countPairs = function (nums, target) {
    let results = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (i < j && nums[i] + nums[j] < target) {
                results++;
            }
        }
    }
    return results;
};

function countPairs(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array first
    let count = 0;
    let n = nums.length;
    let i = 0;
    let j = n - 1;

    while (i < j) {
        if (nums[i] + nums[j] < target) {
            // If nums[i] + nums[j] < target, all pairs from i to j-1 are valid
            count = count + 1;
            i++; // Move the left pointer to the right
        } else {
            j--; // Move the right pointer to the left
        }
    }

    return count;
}

let nums = [-6, 2, 5, -2, -7, -1, 3],
    target = -2;
let resp = countPairs(nums, target);
console.log(resp);
