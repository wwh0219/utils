function deepCopy(source) {//对象深拷贝
  let target;
  if (source instanceof Array) {
    target = [];
    source.forEach(item => {
      if (typeof item == 'object') {
        target.push(deepCopy(item));
      } else {
        target.push(item);
      }
    });
  } else if (source instanceof Object) {
    target = {};
    for (let prop in source) {
      if (typeof source[prop] == 'object') {
        target[prop] = deepCopy(source[prop]);
      } else {
        target[prop] = source[prop];
      }
    }
  } else {
    return source
  }
  return target
}

function arrayUnique(arr) {//Array<String|Number>去重
  let result = [];
  let str=[];
  let num=[]
  arr.forEach(item=>{
    if(isNaN(item)){
      str.push(item)
    }else{
      num.push(item)
    }
  })
  arr = num.sort((a, b) => a - b).concat(str.sort());
  arr.forEach((a, i) => {
    if (result.includes(a)) return;
    result.push(a)
  })
  return result;
}

function deepEqual(obj1, obj2) {//JSON对象深度对比
  let result = true;
  if (Array.isArray(obj1) && Array.isArray(obj2) && obj1.length!==obj2.length) {//数组长度不同
    return result=false;
  }
  for (let prop in obj1) {
    let val1 = obj1[prop];
    let val2 = obj2[prop];
    if ((typeof val1) !== (typeof val2)) {//数据类型不同
      return result = false
    } else if (typeof val1==='object') {
      result = deepEqual(val1,val2)
    }else{
      result = (val1===val2)
    }
    if(result===false){
      return false
    }
  }
  return result
}
function findNode(data, id,chilStr='children'){//树形结构根据id查找节点数据
  let index = [];
  let target;
  let childrenList;
  if (data instanceof Array) {
    childrenList = data;
  } else {
    childrenList = data[childStr];
  }
  for (let i = 0; i <= childrenList.length; i++) {
    let children = childrenList[i];
    if (children) {
      if (children.id == id) {
        return target = children;
      } else if (children[childStr] && children[childStr].length) {
        target = findNode(children, id);
      }
    }
  }
  return target
};
exports.deepCopy = deepCopy;
exports.arrayUnique = arrayUnique;
exports.deepEqual = deepEqual;
exports.findNode = findNode;
const a = {
  a: [1, 2, 3, 4, 5],
  b: {
    b1: [3, 2, 1],
    b2: {
      b21: {
        b211: [3, 3, 4, 5, {
          x: 'zz',
          l: {
            qq: 'zzzz'
          }
        }]
      }
    }
  }
}
deepCopy(a)


