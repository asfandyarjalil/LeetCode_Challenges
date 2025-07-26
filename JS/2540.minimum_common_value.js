// TODO
var getCommon = function (nums1, nums2) {
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            return nums1[i];
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return -1;
};
let nums1 = [1, 2],
    nums2 = [2, 4];
let resp = getCommon(nums1, nums2);
console.log(resp);
