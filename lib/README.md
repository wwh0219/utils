# utils

自用帮助函数

#使用
```typescript
import {arrayUnique,deepCopy,findNode,deepEqual} from '@qwert0219/utils'

arrayUnique:(arr:array)=>Array//数组去重
deepCopy:(arr:any)=>any//深度拷贝
findNode:(data:object | array,id:string,childStr:string)=>Array//节点查找
deepEqual:(param1:any,param2:any)=>boolean
```