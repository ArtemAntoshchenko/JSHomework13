let arr=[1,2,3,2,1]
function arrToSet(arr){
    let set=new Set(arr)
    let newArr=Array.from(set)
    return newArr
}
console.log(arrToSet(arr))


let arr1=[2,4,5,2,1,5,6]
function uniq(arr1){
    let set1=new Set(arr1)
    return set1===arr1
}
console.log(uniq(arr1))


let set2=new Set(['1','2','3'])
let set3=new Set(['4','5','6'])
for(let i of set2){
    set3.add(i)
}
console.log(set3)


let obj={
    "1":"something",
    2:'something2'
}
function objToMap(obj){
    let map=new Map (Object.entries(obj))
    return map
}
console.log(objToMap(obj))


