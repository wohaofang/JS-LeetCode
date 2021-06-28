/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let l = 0;
  let res = 0;
  const map = new Map()
  for(let i=0;i<s.length;i+=1){
      if(map.has(s[i])&&map.get(s[i])>=l){
          l = map.get(s[i])+1
      }

      res = Math.max(res,i-l+1)
      map.set(s[i],i)
  }
  return res
};