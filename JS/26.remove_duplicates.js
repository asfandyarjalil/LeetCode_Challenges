// TODO
// const removeDuplicates = function (nums) {
//     if (nums.length === 0) return 0;
//     if (nums.length === 1) return 1;
//     let pre = nums[0];
//     for (let i = 1; i < nums.length; ) {
//         if (nums[i] !== pre) {
//             pre = nums[i];
//             i += 1;
//         } else {
//             nums.splice(i, 1);
//         }
//     }
//     return nums.length;
// };

const removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return 1;

    let k = 1;
    // is number k base pa hum unique value dalay ga ..if agr previous value different thi to is nums[k]
    // jo k num[1] hoga wahan pa unique value ajaye gi..
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let resp = removeDuplicates(nums);
console.log(resp); // Output: 5
