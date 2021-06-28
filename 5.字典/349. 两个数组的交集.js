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


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection2 = function(nums1, nums2) {
    let set = new Set(nums1)
    let arr = []
    nums2.forEach(v=>{
        if(set.has(v)){
            arr.push(v)
            set.delete(v)
        }
    })

    return arr
};