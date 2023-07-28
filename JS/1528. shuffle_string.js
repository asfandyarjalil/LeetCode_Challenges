var restoreString = function (s, indices) {
    let target = new Array(s.length).fill(0);

    for (let i = 0; i < indices.length; i++) {
        target.splice(indices[i], 1, s[i]);
    }
    return target.join("");
};

const restoreString = function (s, indices) {
    const n = s.length;
    const arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[indices[i]] = s[i];
    }
    return arr.join("");
};

let s = "codeleet",
    indices = [4, 5, 6, 7, 0, 2, 1, 3];
let result = restoreString(s, indices);

// console.log(result);
