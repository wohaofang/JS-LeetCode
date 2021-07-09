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
 * @return {number[][]}
 */


// 时间复杂度  On
// 空间复杂度  On

/**
 * todo 方案一 
 * */ 
 var levelOrder = function(root) {
  if(!root) return []
  let p = [[root,0]]
  let res = []
  while(p.length){
      const [n,l] = p.shift()
      if(!res[l]){
          res.push([n.val])
      }else{
          res[l].push(n.val)
      }
      if(n.left) p.push([n.left,l+1])
      if(n.right) p.push([n.right,l+1])
  }
  return res
};

/**
 * todo 方案二
 * */ 
 var levelOrder = function(root) {
  if(!root) return []
  let p = [root];
  let res = []
  while(p.length){
      let len = p.length
      res.push([])
      while(len--){
          const n = p.shift()
          res[res.length -1].push(n.val)
          if(n.left) p.push(n.left)
          if(n.right) p.push(n.right)
      }
  
  }

  return res
};