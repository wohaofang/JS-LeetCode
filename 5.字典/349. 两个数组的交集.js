/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
    let m = new Map();
    let arr = [];
    nums1.forEach(v=>{
        m.set(v,true)
    })
    nums2.forEach(v=>{
        if(m.get(v)){
            arr.push(v);
            m.delete(v)
        }
    })
    return arr
};