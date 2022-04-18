const instanceof1 = (A,B) => {
    // 使用链表遍历 查找
    let p = A
    while(p){
        if(p === B.prototype) return true
        p = p.__proto__
    }
    return false
}



