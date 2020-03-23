const flat = <T>(arr: T[], deep = 1) => {
  const result: T[] = []
  let currentDeep = 0
  const _flat = (_arr: T[]) => {
    currentDeep++
    _arr.forEach(i => {
      if (Array.isArray(i) && currentDeep <= deep) {
        _flat(i)
      } else {
        result.push(i)
      }
    })
  }
  _flat(arr)
  return result
}
export {
  flat
}