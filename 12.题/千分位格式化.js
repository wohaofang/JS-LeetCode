/**
 * 常见思路
 * 1.转换为数组，reverse，每3位拆分
 * 2.使用字符串拆分
 * 3.使用正则表达式(效率不高 排除)
 * */ 

const num = 1242336237743

/**
 * 千分位格式化(使用数组)
 * */ 
function format1(n){
  n = Math.floor(n) // 只考虑整数

  const s = n.toString()
  const arr = s.split('').reverse()
  return arr.reduce((prev, val, index)=>{
    if (index % 3 === 0) {
      if(prev){
        return val + ',' + prev
      }else{
        return val
      }
    }else{
      return val + prev
    }
  },'')
}

console.log('🚀 ', format1(num))

/**
 * 千分位格式化(使用字符串)
 * */ 
function format2(n){
  n = Math.floor(n) // 只考虑整数

  const s = n.toString()
  let res = ''
  for(let i= s.length-1; i>=0;i--){
    let j = s.length -i
    if(j % 3 === 0 ){
      if(i === 0 ){
        res = s[i] + res
      }else{
        res = ',' + s[i] + res
      }
    }else{
      res = s[i] + res
    }
  }

  return res
}

console.log('🚀 ', format2(num))
