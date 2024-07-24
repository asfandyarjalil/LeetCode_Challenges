var uniqueOccurrences = function (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }

  let unique = new Set(Object.values(obj));
  return [...unique].length === Object.values(obj).length;
};

var uniqueOccurrences = function (arr) {
  let obj = {};

  // Count occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  // Check if the number of occurrences is unique
  let unique = new Set(Object.values(obj));
  return unique.size === Object.values(obj).length;
};
let arr = [1, 2, 2, 1, 1, 3];
const res = uniqueOccurrences(arr);
console.log(res);
