var largestAltitude = function (gain) {
  let sum = 0;
  let prefixSum = [];
  for (let i = 0; i < gain.length; i++) {
    sum += gain[i];
    prefixSum.push(sum);
  }

  let max = Math.max(...prefixSum);
  return max < 0 ? 0 : max;
};
let gain = [-4, -3, -2, -1, 4, 3, 2];
const result = largestAltitude(gain);
console.log(result);

[-4, -3, -2, -1, 4, 3, 2];
[-4, -7, -9, -10, -6, -3, -1];
