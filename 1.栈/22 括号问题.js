function track(s){
    if(s.length%2===1) return false
    const arr = [];
    for(let i=0; i<s.length; i++){
        const c = s[i];
        if( c==="(" || c==="{" || c==="["){
            arr.push(c) 
        }else{
            const t = arr[arr.length-1]
            if(
                (t==="(" && c===")") ||
                (t==="{" && c==="}") ||
                (t==="[" && c==="]")
            ){
                arr.pop()
            }else{
                return false;
            }
        }
    }
    return arr.length === 0;
}

console.log(track('(())[]'))
console.log(track('({}[{]})'))