var moveZeroes = function (nums) {
    // nums.splice(0, 1);
    // console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            let index = nums.indexOf(nums[i]);
            if (index > -1) {
                nums.splice(0, 1);
            }

            nums.push(0);
        }
    }
    // console.log(nums);

    return;
};
let nums = [0, 0, 1];
console.log(moveZeroes(nums));
