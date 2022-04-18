/**
 * @param {number} n
 * @return {number}
 */
/**
 * 时间复杂度 O n
 * 空间复杂度 O n
 * */ 
 var climbStairs = function(n) {
  if(n < 2) return 1
  let arr = [1,1];
  for(let i=2; i<=n;i+=1){
      arr[i] = arr[i-1] + arr[i-2]
  } 
  return arr[n]
};

/**
 * todo 优化
 * 时间复杂度 O n
 * 空间复杂度 O 1
 * */ 

 var climbStairs2 = function(n) {
  if(n < 2) return 1
  let dp0 = 1
  let dp1 = 1
  for(let i=2; i<=n;i+=1){
      let item = dp0;
      dp0 = dp1;
      dp1 = dp1 + item
  } 
  return dp1
};