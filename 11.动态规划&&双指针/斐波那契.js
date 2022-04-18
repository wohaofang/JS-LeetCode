

/**
 * 斐波那契数列(递归)
 * @param n n
 * 时间复杂度 O(2^n) 不太好
 * */ 

function fibonacci(n){
  if(n <= 0) return 0
  if(n === 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// console.log('🚀 ', fibonacci(9))

/**
 * 优化
 * 斐波那契数列(循环)
 * */ 
function fibonacci2(n){
  if(n <= 0) return 0
  if(n === 1) return 1

  let n1 = 1 // 记录 n-1的结果
  let n2 = 0 // 记录 n-2的结果
  let res = 0

  for(let i=2; i<= n; i++){
    res = n1 + n2

    // 记录中介结果
    n2 = n1
    n1 = res
  }
  return res
}

console.log('🚀 ', fibonacci2(9))