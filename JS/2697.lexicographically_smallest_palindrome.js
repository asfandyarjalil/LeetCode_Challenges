// TODO
var makeSmallestPalindrome = function (s) {
    let chars = s.split('');
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (chars[start] !== chars[end]) {
            if (chars[start] < chars[end]) {
                chars[end] = chars[start];
            } else {
                chars[start] = chars[end];
            }
        }
        start++;
        end--;
    }
    return chars.join('');
};

let s = 'egcfe';
let resp = makeSmallestPalindrome(s);
console.log(resp);
