import { TreeNode, lowestCommonAncestor } from './utils.mjs';

let tree1 = new TreeNode(6);
tree1.left = new TreeNode(2); tree1.right = new TreeNode(8);
tree1.left.left = new TreeNode(0); tree1.left.right = new TreeNode(4);
tree1.left.right.left = new TreeNode(3); tree1.left.right.right = new TreeNode(5);

console.log(lowestCommonAncestor(tree1, 2, 8));
