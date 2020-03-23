
import { ArrayItem } from './types'

const deepFilter = <T, Field extends string>(arr: ArrayItem<T, Field>[], callback: (x: ArrayItem<T, Field>) => boolean, field: Field):ArrayItem<T,Field>[] => {
  const runCallback = (item: ArrayItem<T, Field>) => {
    try {
      return callback(item)
    } catch (error) {
      return false
    }
  }
  return arr.map(i => {
    const children = i[field] ? deepFilter(i[field], callback, field) : undefined
    return {
      ...i,
      children
    }
  }).filter(i => {
    return i[field] && i[field].length || runCallback(i)
  })
}
export {
  deepFilter
}