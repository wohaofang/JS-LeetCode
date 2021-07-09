const json = {
  a:{b:{c:1}},
  d:[1,2],
}

/**
 * 遍历 JSON 的所有节点值
 * */ 

const dfs = (n,path)=>{
  console.log(n,path)
  Object.keys(n).forEach(v=>{
    dfs(n[v],path.concat(v))
  })
}

dfs(json,[])