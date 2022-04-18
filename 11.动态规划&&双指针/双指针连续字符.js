/**
 * 求连续最多的字符和次数 (双指针思路)
 * 时间复杂度 On
 * */ 

const list = 'aaabbbbdddddfffgbbggaaaassssssssss'

function moreChar(arr){
  let length = arr.length
  let res = {
    char:'',
    length: 0
  }
  if(length === 0) return res

  let tempLength = 0 // 临时记录当前连续字符的长度
  let i
  let j = 0
  for(i=0;i < length; i++){
    if(arr[i] === arr[j]){
      tempLength++
    }

    if(arr[i] !== arr[j] || i === length -1){
      // 不相等，或者 i 到了字符串的末尾
      if( tempLength > res.length){
        res.length = tempLength
        res.char = arr[j]
      }
      tempLength = 0

      if(i < length-1){
        j = i // 让 j 追上 i
        i-- // 细节
      }
    }
  }
  return res
}

console.log('🚀 ', moreChar(list))