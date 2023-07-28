function truncateSentence(s, k) {
    let truncatedString = "";
    let wordCount = 0;
    let i = 0;

    while (i < s.length && wordCount < k) {
        if (s[i] !== " ") {
            truncatedString += s[i];
        } else {
            wordCount++;
            truncatedString += " ";
        }
        i++;
    }

    // If the last character is not a space and we still have words remaining to truncate, add a space at the end.
    if (i === s.length && wordCount < k) {
        truncatedString += " ";
    }

    return truncatedString;
}
var truncateSentence = function (s, k) {
    s = s.split(" ");
    let newArr = [];
    for (let i = 0; i < k; i++) {
        newArr.push(s[i]);
    }
    console.log(typeof newArr.toString());
    console.log(newArr.toString().split(",").join(" "));
};
var truncateSentence = function (s, k) {
    const wordsArray = s.split(" ");

    // Extract the first 'k' words and join them back into a string
    const truncatedString = wordsArray.slice(0, k).join(" ");
    return truncatedString;
};
let s = "Hello how are you Contestant",
    k = 4;

truncateSentence(s, k);
