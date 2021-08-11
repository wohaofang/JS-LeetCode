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
 * @return {boolean}
 */
/**
 * 时间复杂度 O n
 * 空间复杂度 O n
 * */ 
 var isSymmetric = function(root) {
  if(!root) {return true}
  let rec = (l,r)=>{

      if(!l&&!r) return true
      if(l&&r&&l.val === r.val &&  rec(l.left,r.right) &&  rec(r.left,l.right)){
         return true
      }
      return false
  }
 return rec(root.left ,root.right)
 
};