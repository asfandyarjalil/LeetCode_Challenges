var decompressRLElist = function (nums) {
    let res = [];

    for (let i = 0; i < nums.length; i = i + 2) {
        let val = [nums[i], nums[i + 1]];
        let newArr = new Array(val[0]).fill(val[1]);
        res.push(newArr);
    }
    return res.flat();
};

let nums = [1, 2, 3, 4];
let result = decompressRLElist(nums);
