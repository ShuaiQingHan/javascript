function flattenArr(arr) {
    return arr.reduce((map, item) => {
              console.log(map)
              console.log(item)
        map[item.id] = item
        return map
    },{})
}
// let a = flattenArr([{id: 1,name: 3},{id: 3, name: 4}])
// console.log(a)
objToArr = (obj) => {
  return Object.keys(obj).map(key => obj[key])
}
let a = objToArr({a: 1,b:2,c: 3})
console.log(a)
