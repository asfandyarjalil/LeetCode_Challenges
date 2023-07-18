var shuffle = function (nums, n) {
    let arr1 = [];
    for (let i = 0; i < n; i++) {
        arr1.push(nums[i], nums[i + n]);
    }
    console.log(arr1);
};

console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
