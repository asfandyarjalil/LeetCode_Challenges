var checkTree = function (root) {
    let sum = root.left.val + root.right.val;
    return sum === root.val;
};
