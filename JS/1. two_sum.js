var twoSum = function (nums, target) {
    const myObj = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        console.log(myObj.hasOwnProperty(complement));
        if (myObj.hasOwnProperty(complement)) {
            return [myObj[complement], i];
        }

        myObj[nums[i]] = i;
    }
};
const numsArray = [2, 7, 11, 15];
const targetToFind = 9;
let res = twoSum(numsArray, targetToFind);
console.log(res);
