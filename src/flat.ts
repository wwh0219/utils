const flat = <T>(arr: T[], deep = 1) => {
  const result: T[] = []
  const _flat = (_arr: T[], _deep: number) => {
    _deep = _deep + 1
    _arr.forEach(i => {
      if (Array.isArray(i) && _deep <= deep) {
        _flat(i,_deep)
      } else {
        result.push(i)
      }
    })
  }
  _flat(arr,0)
  return result
}
export {
  flat
}