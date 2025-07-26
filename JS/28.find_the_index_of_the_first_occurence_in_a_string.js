var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
};

let haystack = 'sadbutsad',
    needle = 'sad';
let res = strStr(haystack, needle);
console.log(res);
