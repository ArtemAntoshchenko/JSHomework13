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


let obj1={
    "1":"something",
    2:'something2'
}
function objToMap(obj1){
    let map=new Map (Object.entries(obj1))
    return map
}
console.log(objToMap(obj1))

//                                      Не смог
let map1=new Map(Object.entries(obj1))
let newKey=map1.keys()
let newValue=map1.values()
let set4=new Set(newValue)
map1.set(set4,newKey)
console.log(map1)
// 

let weakMap=new WeakMap()
function doSomeThing(obj){
    if (!weakMap.has(obj)){
        let result=5+obj.number
        weakMap.set(obj,result)
    }
    return weakMap.get(obj)
}
let obj={number:5}
let res=doSomeThing(obj)
let res1=doSomeThing(obj)
obj=null
console.log(weakMap)


let weakSet=new WeakSet()
let object={number:5}
let object1={number:4}
weakSet.add(object)
function check(obj){
    return weakSet.has(obj)
}
console.log(check(object))
console.log(check(object1))