const arr = [7,5,6,3,2,3,1,4]


/**
 * todo 冒泡排序
 * 时间复杂度 O(n^2) 性能不太好
 * */ 
Array.prototype.bubbleSort = function () {
  // this -> arr
  for(let i =0; i<this.length-1; i++){
    for(let j = 0; j<this.length -1-i; j += 1){
      if(this[j]>this[j+1]){
        const num = this[j];
        this[j] = this[j+1];
        this[j+1] = num
      }
    }
  }
}
// arr.bubbleSort()

/**
 * todo 选择排序
 * 时间复杂度 O(n^2) 性能不太好
 * */ 
Array.prototype.selectionSort = function () {
  for(let i = 0; i < this.length - 1; i+=1){
    let indexMin = i
    for(let j = i; j < this.length; j+=1 ){
        if(this[j] < this[indexMin]){
          indexMin = j;
        }
    }
    if( i !== indexMin){
      const num = this[i];
      this[i] = this[indexMin];
      this[indexMin] = num
    }
  }
}

// arr.selectionSort()

/**
 * todo 插入排序
 * 时间复杂度 O(n^2) 
 * */ 
Array.prototype.insertionSort = function () {
  for(let i = 0; i < this.length; i+=1){
    const temp = this[i];
    let j = i;
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1]
      }else{
        break;
      }
      j -= 1
    }
    this[j] = temp;
  }
}
// arr.insertionSort()

/**
 * todo 快速排序
 * 时间复杂度 O(n*logN) 
 * 递归
 * */ 
 Array.prototype.quickSort = function () {
   const rec = (arr) => {
     if(arr.length === 1 || arr.length === 0 ) {return arr}
     let left = [];
     let right = [];
     let mid = arr[0];
     for(let i = 1; i < arr.length; i +=1){
       if(arr[i]<mid){
         left.push(arr[i])
       }else{
        right.push(arr[i])
       }
     }
     return [ ...rec(left), mid, ...rec(right)]
   }

   const res = rec(this)
   res.forEach((n,i)=>{this[i] = n})
 }

arr.quickSort()


// console.log(arr)



