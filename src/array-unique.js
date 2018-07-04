export default function arrayUnique(arr) {//Array<String|Number>去重
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