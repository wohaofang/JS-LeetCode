/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归版本
 var inorderTraversal = function(root) {
  let res = []
  let rec = (n) => {
      if(!n) return;
      rec(n.left)
      res.push(n.val)
      rec(n.right)
  }
  rec(root)
  return res
};

// 迭代版 栈版
