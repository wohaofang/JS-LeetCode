/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

/**
 * 二分搜索
 * 时间复杂度 O log n
 * 空间复杂度 O log n
 * */ 
 var guessNumber = function(n) {
  const rec = (l,r)=>{
      if(l>r)return
      let mid = Math.floor((l+r)/2)
      let res = guess(mid)
      if(res === 0){
          return mid
      }else if(res === -1){
         return rec(l,mid-1)
      }else{
         return rec(mid+1,r)
      }
  }
  return rec(1,n)
};