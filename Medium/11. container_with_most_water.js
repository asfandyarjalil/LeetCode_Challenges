const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function (height) {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let area = Math.min(height[i], height[j]) * (j - i);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }
  return maxArea;
};

console.log(maxArea(height));
