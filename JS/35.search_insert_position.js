//  TODO DRY RUN TO understand better
var searchInsert = function (nums, target) {
    let start = 0;
    let end = nums.length;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
            console.log(start);
        } else {
            end = mid - 1;
        }
    }

    return start;
};

let nums = [1, 3, 5, 6],
    target = 7;

console.log(searchInsert(nums, target));
