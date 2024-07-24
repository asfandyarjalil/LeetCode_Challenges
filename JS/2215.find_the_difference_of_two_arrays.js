// var findDifference = function (nums1, nums2) {
//   let a0 = [];
//   let a1 = [];
//   nums1 = [...new Set(nums1)];
//   nums2 = [...new Set(nums1)];
//   for (const i of nums1) {
//     if (nums2.indexOf(i) === -1) {
//       a0.push(i);
//     }
//   }
//   for (const i of nums2) {
//     if (nums1.indexOf(i) === -1) {
//       a1.push(i);
//     }
//   }
//   return [a0, a1];
// };

// var findDifference = function (nums1, nums2) {
//   const set1 = new Set(nums1);
//   const set2 = new Set(nums2);
//   const a0 = [];
//   const a1 = [];

//   for (const num of set1) {
//     if (!set2.has(num)) {
//       a0.push(num);
//     }
//   }

//   for (const num of set2) {
//     if (!set1.has(num)) {
//       a1.push(num);
//     }
//   }

//   return [a0, a1];
// };

// -------- //
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const x = [...set1].filter((item) => !set2.has(item));
  const y = [...set2].filter((item) => !set1.has(item));
  return [x, y];
};
let nums1 = [1, 2, 3, 3],
  nums2 = [1, 1, 2, 2];
const res = findDifference(nums1, nums2);
console.log(res);
