/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 时间复杂度 O n
 * 空间复杂度 O n
 * */ 
 var rob = function(nums) {
  if(nums.length === 0) return 0
  let arr = [0,nums[0]];
  for(let i = 2;i<=nums.length;i+=1){
      arr[i] = Math.max(arr[i-2]+nums[i-1],arr[i-1])
  }
  return arr[nums.length]
};