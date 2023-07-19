var kidsWithCandies = function (candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    let result = [];
    console.log(maxCandies);
    for (let i in candies) {
        let candi = candies[i] + extraCandies;
        if (candi >= maxCandies) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    console.log(result);
};
kidsWithCandies([4, 2, 1, 1, 2], 1);

// var kidsWithCandies = function (candies, extraCandies) {
//     const maxCandies = Math.max(...candies); // Find the maximum number of candies

//     const result = candies.map((kidCandies) => kidCandies + extraCandies >= maxCandies); // Compare each kid's candies with the maximum

//     return result;
// };

// Example usage
// const candies = [4, 2, 1, 1, 2];
// const extraCandies = 1;
// const result = kidsWithCandies(candies, extraCandies);
// console.log(result);
