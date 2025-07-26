var isPalindrome = function (s) {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        while (start < end && !isValidChar(s[start])) {
            start++;
        }
        while (start < end && !isValidChar(s[end])) {
            end--;
        }
        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};

// Helper function to check if a character is alphanumeric
const isValidChar = (char) => {
    const code = char.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) || // 0-9
        (code >= 65 && code <= 90) || // A-Z
        (code >= 97 && code <= 122)
    ); // a-z
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // Output: true
console.log(isPalindrome('race a car')); // Output: false
