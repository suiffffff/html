let obj = {
  name: '学姐',
  age: 20,
  gender: 'female'
}
function copy(Obj) {
  let newxuejie = {}
  for (let i in Obj) {
    newxuejie[i] = Obj[i]
  }
  return newxuejie
}

let xuejie1 = copy(obj)
let xuejie2 = copy(obj)
let xuejie3 = copy(obj)
let arr = []
arr.push(xuejie1, xuejie2, xuejie3)
console.table(arr);