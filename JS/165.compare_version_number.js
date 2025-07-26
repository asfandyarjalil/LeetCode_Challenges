var compareVersion = function (version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    if (v1.length > v2.length) {
        v2 = v2.concat(new Array(v1.length - v2.length).fill('0'));
    } else {
        v1 = v1.concat(new Array(v2.length - v1.length).fill('0'));
    }

    let i = 0;
    let j = 0;

    while (i < v1.length && j < v2.length) {
        let n1 = parseInt(v1[i]);
        let n2 = parseInt(v2[j]);
        if (n1 < n2) {
            return -1;
        }
        if (n1 > n2) {
            return 1;
        }
        i++;
        j++;
    }

    return 0;
};

var compareVersion = function (version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    let len = Math.max(v1.length, v2.length);

    for (let i = 0; i < len; i++) {
        let n1 = i < v1.length ? parseInt(v1[i]) : 0; // If out of bounds, use 0
        let n2 = i < v2.length ? parseInt(v2[i]) : 0; // If out of bounds, use 0

        if (n1 < n2) {
            return -1;
        }
        if (n1 > n2) {
            return 1;
        }
    }

    return 0;
};

let version1 = '1.0.1',
    version2 = '1';

let resp = compareVersion(version1, version2);
console.log(resp);
