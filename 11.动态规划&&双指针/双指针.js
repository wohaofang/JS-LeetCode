const list = [1,0,0,2,3,5,0,0,7,8]  // => [1,2,3,5,7,8,0,0,0,0]  



function moveZore(arr){
  const length = arr.length
  if(length === 0) return

  let i
  let j = -1 //指向第一个 0

  for(let i=0; i<length; i++){
    if(arr[i] === 0){
      // 第一个 0
      if(j<0) { 
        j = i 
      }
    }
    
    if(arr[i] !== 0 && j >= 0){
      // 交换
      const n = arr[i]
      arr[i] = arr[j]
      arr[j] = n

      j++
    }
  }

  console.log('🚀 ', arr)
}

moveZore(list)