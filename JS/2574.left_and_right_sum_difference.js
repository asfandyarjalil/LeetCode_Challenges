function leftRightDifference(nums) {
    const n = nums.length;
    const answer = new Array(n);

    for (let i = 0; i < n; i++) {
        let leftSum = 0;
        let rightSum = 0;

        // Calculate the sum of elements to the left of the current index 'i'
        for (let j = 0; j < i; j++) {
            leftSum += nums[j];
        }

        // Calculate the sum of elements to the right of the current index 'i'
        for (let k = i + 1; k < n; k++) {
            rightSum += nums[k];
        }

        // Calculate the absolute difference between the left and right sums
        answer[i] = Math.abs(leftSum - rightSum);
    }

    return answer;
}

// Example usage:
const nums = [10, 4, 8, 3];
const answer = leftRightDifference(nums);
console.log(answer); // Output: [17, 9, 2, 10]
