function hammingWeight(n) {
    let count = 0; // Initialize the count of set bits

    // Iterate through all the bits of n
    while (n > 0) {
        // If the least significant bit is 1, increment the count
        if (n % 2 === 1) {
            count++;
        }
        console.log('>>>>.....', n % 2);
        console.log('>>>>', n);

        // Right shift n by 1 to check the next bit
        n = Math.floor(n / 2); // Alternatively, you could use n >>= 1;
        console.log('<<<<', n);
    }

    return count; // Return the number of set bits
}

// Example Usage:
console.log(hammingWeight(11)); // Output: 3 (Binary: 1011)
// console.log(hammingWeight(128)); // Output: 1 (Binary: 10000000)
// console.log(hammingWeight(255)); // Output: 8 (Binary: 11111111)
