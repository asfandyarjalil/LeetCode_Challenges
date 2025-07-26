var findDuplicate = function (nums) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in map) {
            return nums[i];
        }
        map[nums[i]] = 1;
    }
    return -1;
};

let nums = [3, 1, 3, 4, 2];
let resp = findDuplicate(nums);
console.log(resp);
