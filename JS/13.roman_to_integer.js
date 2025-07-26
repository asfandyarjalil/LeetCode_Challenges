var romanToInt = function (s) {
    let romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const value = romanValues[s[i]];
        if (i < s.length - 1 && romanValues[s[i + 1]] > value) {
            result = result - value;
        } else {
            result = result + value;
        }
    }
    return result;
};

function romanToInteger(s) {
    // Create a map to associate Roman numerals with their values
    const symbolValues = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);

    console.log(symbolValues);
    let result = 0;
    let prevValue = 0;

    // Iterate through the Roman numeral string from right to left
    for (let i = s.length - 1; i >= 0; i--) {
        const symbol = s[i];
        const value = symbolValues.get(symbol);

        // Check if the value is greater or equal to the previous value
        if (value >= prevValue) {
            result += value;
        } else {
            result -= value;
        }

        prevValue = value;
    }

    return result;
}

console.log(romanToInteger('MCM'));
