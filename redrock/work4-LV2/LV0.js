let obj1 = new Object()
obj1.name = '学姐1'
obj1.age = 20
let obj2 = {
  name: '学姐2',
  age: 20
}

function XuejieMaker() {
  this.name = '学姐3',
    this.age = 20
}
let obj3 = new XuejieMaker()
function XuejieMaker2() {
  return {
    name: '学姐4',
    age: 20
  }
}
let obj4 = XuejieMaker2()

let obj5 = (function () {
  return {
    name: '学姐5',
    age: 20
  }
}())