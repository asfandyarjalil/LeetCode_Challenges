//TODO

var findTheArrayConcVal = function (nums) {
    let concatValue = 0;
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        if (start === end) {
            concatValue += nums[start];
        } else {
            let s = `${nums[start]}${nums[end]}`;
            concatValue += +s;
        }
        start++;
        end--;
    }
    return concatValue;
};
let nums = [7, 52, 2, 4];

let resp = findTheArrayConcVal(nums);
console.log(resp);
