type SorN = number | string
const genKey = (key: SorN)=>{
  return [typeof key,key]
}
export const uniqueArray = (arr: SorN[]) => {//Array<String|Number>去重
  const map: { [key in SorN]: SorN}={}
  arr.forEach(i=>{
    const [keytype,key]=genKey(i)
    const _key=`${keytype}-${key}`
    if (!map[_key]){
      map[_key]=i
    }
  })
  return Object.values(map)
}

type ArrayItem<KeyField extends string>={
  [key in KeyField]:SorN;
}&{
  [key:string]:any
}

export const uniqueArrayByField = <T extends string>(arr: ArrayItem<T>[], field: T) => {// Array<Object>根据某个字段去重
  const map: { [key in SorN]: ArrayItem<T> } = {}
  arr.forEach(item => {
    const [keytype, key] = genKey(item[field])
    const _key = `${keytype}-${key}`
    if (!map[_key]) {
      map[_key] = item
    }
  })
  return Object.values(map)
}