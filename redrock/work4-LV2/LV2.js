
let arr = [[1, [2, 3], 4], [5, [6, 7], 8, 9]];
function fn(array) {
  return array.reduce((newArr, present) => {
    if (Array.isArray(present)) {
      return newArr.concat((fn(present)))
    }
    else {
      return newArr.concat(present)
    }
  }, [])
}
console.log(fn(arr));