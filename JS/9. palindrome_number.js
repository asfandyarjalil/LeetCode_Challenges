let isPalindrome = (x) => {
    if (x < 0) return false;
    const rev = reverseNum(x);
    return x === rev;
};

function reverseNum(num) {
    let n = num;
    let rev = 0;
    let dig;

    while (num > 0) {
        dig = num % 10;
        console.log(dig);
        rev = rev * 10 + dig;
        console.log(rev);
        num = Math.floor(num / 10);
    }
    return rev;
}
let x = isPalindrome(-121);
console.log(x);
