function getArr(items : any[]): any 
{
return new Array().concat(items)
}
let numArr = getArr([1,2,3])
let strArr = getArr(["a","b"])

numArr.push("kj") 
console.log(numArr)   


// genaric 
function getArr2<T>(items : T[]): T[] 
{
return new Array<T>().concat(items)
}
let numArr1 = getArr2<number>([1,2,3])
let strArr1 = getArr2<string>(["a","b"])
//numArr1.push("kj")  error
numArr1.push(22) 
strArr1.push("kj") 


