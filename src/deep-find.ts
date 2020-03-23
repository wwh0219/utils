import { ArrayItem } from './types'


/**
 * 广度优先查找
 * @param data 
 * @param callback 
 */
const deepFind = <T, Field extends string='children'>(data: ArrayItem<T, Field>[], callback: (x: ArrayItem<T, Field>) => boolean, field:Field): ArrayItem<T, Field>|undefined => {
  const queue: ArrayItem<T,Field>[] = []
  const runCallback = (item: ArrayItem<T, Field>) => {
    try {
      return callback(item)
    } catch (error) {
      return false
    }
  }
  queue.push(...data)
  const _deepFind = () => {
    while (queue.length) {
      const item = queue.splice(0, 1)[0]
      if (runCallback(item)) {
        return item
      } else if (item[field] && item[field].length) {
        queue.push(...item[field])
      }
    }

  }
  return _deepFind()
}



/**
 * 深度优先节点查找
 * @param data 
 * @param callback 
 */
const deepFind2 = <T, Field extends string='children'>(data: ArrayItem<T, Field>[], callback: (x: ArrayItem<T, Field>) => boolean,field: Field) => {
  const runCallback = (item: ArrayItem<T, Field>) => {
    try {
      return callback(item)
    } catch (error) {
      return false
    }
  }
  const _deepFind = (_data: ArrayItem<T, Field>[]): ArrayItem<T, Field>|undefined => {
    for (let i = 0; i < _data.length; i++) {
      if (runCallback(_data[i])) {
        return _data[i]
      } else if (_data[i][field] && _data[i][field].length) {
        const result = _deepFind(_data[i][field])
        if (result) {
          return result
        }
      }
    }
  }
  return _deepFind(data)
}

export {
  deepFind,
  deepFind2
}