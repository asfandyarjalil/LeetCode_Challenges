function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return '';
    }

    const firstWord = strs[0];
    
    let commonPrefix = '';

    // Loop through the characters of the first word
    for (let i = 0; i < firstWord.length; i++) {
        const currentChar = firstWord[i];

        // Check if the current character matches the corresponding character in other words
        for (let j = 1; j < strs.length; j++) {
            const currentWord = strs[j];

            // If the current character doesn't match or the index is beyond the length of current word
            if (currentWord[i] !== currentChar) {
                return commonPrefix; // Return the common prefix found so far
            }
        }

        // If the character matches in all words, add it to the common prefix
        commonPrefix += currentChar;
    }

    return commonPrefix; // If no mismatch is found, the entire first word is the common prefix
}

// Example usage:
const example1 = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(example1)); // Output: "fl"

const example2 = ['dog', 'racecar', 'car'];
console.log(longestCommonPrefix(example2)); // Output: ""
0;
