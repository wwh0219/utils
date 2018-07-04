/**
 * 
 * @param {Object|Array} data 数据源
 * @param {String} id 目标id
 * @param {String} childStr 子项所在字段
 */
export default function findNode(data, id, childStr='children'){//树形结构根据id查找节点数据
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
       target = findNode(children, id,childStr);
       if (target&&target.id == id){
         return target
       };
     }
   }
 }
 return target
};