const numsArray = [3, 5, -4, 8, 11, 1, -1, 6];
const targetToFind = 10;

const findTwoSum = (nums, target) => {
  const numsMap = {};
  for (let i = 0; i < nums.length; i++) {
    const currentMapVal = numsMap[nums[i]];
    //console.log(currentMapVal > 0);
    if (currentMapVal > 0) {
      // false if undefined
      return [currentMapVal, i];
    } else {
      const numberToFind = target - nums[i];

      numsMap[numberToFind] = i;
      console.log(numberToFind);
    }
  }
  return null;
};

console.log(findTwoSum(numsArray, targetToFind));
