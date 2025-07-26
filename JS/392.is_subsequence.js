var isSubsequence = function (s, t) {
    let c = -2;
    for (let i = 0; i < s.length; i++) {
        let index = t.indexOf(s[i]);

        if (index !== -1) {
            if (index > c) {
                c = index;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};

let s = 'axc',
    t = 'ahbgdc';

let res = isSubsequence(s, t);
console.log(res);
