const { BinarySearchTree } = require('../DSA/binaryTree');
const tree = new BinarySearchTree();
tree.insert(2);
tree.insert(1);
tree.insert(3);
tree.insert(null);
tree.insert(null);
tree.insert(0);
tree.insert(1);
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

// console.log(traverse(tree.root));
// console.log(tree);
// TODO
var evaluateTree = function (root) {
    //  Base case: if the node is a lead node return its value as boolean
    if (!root?.left && !root?.right === null) {
        return root.value === 1;
    }
    const leftEval = evaluateTree(root?.left);
    console.log(leftEval);
    const rightEval = evaluateTree(root?.right);
};
// [2, 1, 3, null, null, 0, 1];

let resp = evaluateTree(tree.root);
// console.log(resp); // true
