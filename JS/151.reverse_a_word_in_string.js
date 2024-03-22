var reverseWords = function (s) {
    let firstLetterFound = false;
    let isReversed = false;

    while (!firstLetterFound) {
        if (s[0] !== "" && isReversed === false) {
            s = s.reverse("");
            isReversed = true;
        }

        if (s[0] === "" && firstLetterFound === false) {
            s = s.slice(1);
        } else {
            firstLetterFound = true;
        }
    }

    let cleanedArr = s.filter((char) => {
        return char !== "";
    });
    // return cleanedArr.join(" ");
};

var reverseWords = function (s) {
    return s
        .split(" ")
        .filter((char) => char !== "")
        .reverse()
        .join(" ");
};
let s = "  hello   world  ";
const result = reverseWords(s);
console.log(result);
