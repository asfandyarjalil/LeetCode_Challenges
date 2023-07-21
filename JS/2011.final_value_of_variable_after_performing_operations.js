var finalValueAfterOperations = function (operations) {
    let x = 0;
    for (let i in operations) {
        if (operations[i].includes("--")) {
            x--;
        } else {
            x++;
        }
    }
    return x;
};
finalValueAfterOperations(["--x", "x++", "x++"]);

const finalValueAfterOperationsV2 = function (operations) {
    let res = 0;
    for (let op of operations) {
        if (op.indexOf("++") !== -1) res++;
        else res--;
    }

    return res;
};
