/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2===1) return false
     const arr = [];
     const m = new Map();
     m.set('(', ')');
     m.set('{', '}');
     m.set('[', ']');
     for(let i=0; i<s.length; i++){
         const c = s[i];
         if(m.has(c)){
             arr.push(c) 
         }else{
             const t = arr[arr.length-1]
             if(m.get(t) === c){
                 arr.pop()
             }else{
                 return false;
             }
         }
     }
     return arr.length === 0;
 };