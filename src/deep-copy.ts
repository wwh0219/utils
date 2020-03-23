export const deepCopy = (source: any) => {//对象深拷贝
  if (typeof source !== 'object' || !Array.isArray(source)) {
    return source
  }
  let target: any
  if (Array.isArray(source)) {
    target = []
    source.forEach(item => {
      target.push(deepCopy(item))
    })
  }
  target = {}
  for (let prop in source) {
    target[prop] = deepCopy(source[prop])
  }
  return target
}