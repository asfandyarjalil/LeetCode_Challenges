function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length;

    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        console.log(mid);
        if (arr[mid] === target) {
            return arr[mid];
        }
        if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let target = 7;
let resp = binarySearch(arr, target);

console.log(resp);
