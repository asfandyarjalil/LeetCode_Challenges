var mostWordsFound = function (sentences) {
    let result = [];

    for (let i = 0; i < sentences.length; i++) {
        let res = sentences[i].split(" ");
        result.push(res.length);
        console.log(res.length);
    }
    let max = Math.max(...result);

    return max;
};
let result = mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]);
console.log(result);

function mostWordsFoundV2(sentences) {
    let maxWords = 0;

    for (const sentence of sentences) {
        // Split the sentence into words using space as the separator
        const words = sentence.split(" ");
        const wordCount = words.length;

        // Update the maximum number of words if needed
        if (wordCount > maxWords) {
            maxWords = wordCount;
        }
    }

    return maxWords;
}

// Example usage:
const sentences = [
    "This is a simple sentence.",
    "Here's another sentence with more words.",
    "A short one.",
    "The longest sentence in this array of strings will have the maximum number of words.",
];

const result2 = mostWordsFoundV2(sentences);
console.log(result2); // Output: 13 (The longest sentence has 13 words)
