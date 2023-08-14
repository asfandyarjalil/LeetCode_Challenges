var countMatches = function (items, ruleKey, ruleValue) {
    let index = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;
    let match = 0;

    for (let i = 0; i < items.length; i++) {
        for (j = 0; j < items[i].length; j = j + 3) {
            if (items[i][index] === ruleValue) {
                match++;
            }
        }
    }
    return match;
};

// *** Solution 2

var countMatches = function (items, ruleKey, ruleValue) {
    const index = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;
    let match = 0;

    for (const item of items) {
        if (item[index] === ruleValue) {
            match++;
        }
    }

    return match;
};

let items = [
        ["phone", "blue", "pixel"],
        ["computer", "silver", "phone"],
        ["phone", "gold", "iphone"],
    ],
    ruleKey = "type",
    ruleValue = "phone";
let result = countMatches(items, ruleKey, ruleValue);
