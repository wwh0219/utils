export const deepEqual=(obj1:any, obj2:any):boolean=> {
  if(Object.is(obj2,obj1)){
    return true
  }
  if(typeof obj1!==typeof obj2){
    return false
  }
  if (typeof obj1 === 'function' && typeof obj2 === 'function'){
    return false
  }
  if (Array.isArray(obj1) && Array.isArray(obj2) && obj1.length !== obj2.length) {
    return  false
  }
  const len1=Object.keys(obj1).length
  const len2 = Object.keys(obj2).length
  if(len1!==len2){
    return false
  }
  for (let prop in obj1) {
    let val1 = obj1[prop]
    let val2 = obj2[prop]
    if(!deepEqual(val1,val2)){
      return false
    }
  }
  return true
}
