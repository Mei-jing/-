function reduce(ary, reducer, initVal) {
  var start = 0
  if (arguments.length === 2) {
    initVal = ary[0]
    start = 1
  }
  var ary = [2, 3, 4, 5, 7]
  let initVal = {}
  for (var i = 0; i < ary.length; i++) {
    initVal = reducer(initVal, ary[i], i, ary)

  }
  return initVal
}


//最大值
reduce([1, 3, 4, 6, 7], (max, curr) => {
  return curr > max ? curr : max
}, -Infinity)

//求和
reduce([1, 3, 4, 6, 7], (sum, curr) => {
  return sum + curr
}, 0)

//阶乘  product 乘积
reduce([1, 3, 4, 6, 7], (sum, curr) => {
  return product + curr
}, 1)



[1, 2, 3, 4, 5, 6, 7].reduce((result, currItem) => {
  if (currItem % 2 == 1) {
    result.push(currItem)
  }
  return result
}, [])

//  ->[1, 3, 5, 7]




// reduce 函数包含三个参数：数组，执行合并操作的函数和初始值

//function filter
function filter(ary, test) {
  return ary.reduce((result, currItem, i, ary) => {  // 执行合并操作的函数
    if (test(currItem, i, ary)) {
      result.push(currItem)
    }
    return result
  }, [])
}


//function map
function map(ary, mapper) {
  return ary.reduce((result, currItem, i, ary) => {
    result.push(mapper(currItem, i, ary))
    return result
  }, [])
}

[1, 3, 5, 7].reduce((result, currItem) => {
  result.push(currItem * currItem)
  return result
}, [])



//function forEach
function forEach(ary, action) {
  ary.reduce((x, currItem, i, ary) => {
    action(currItem, i, ary)
  }, null)
}

[1, 2, 3, 4, 5].reduce((currItem) => {
  console.log(currItem)
}, null)

//every
//some
//fill
//find
//findIndex
//flat
//reduceRight

function bind(f, omit, ...fixedArgs) {
  return function (...args) {
    return f(...fixedArgs, ...args)
  }
}

function f(a, b, c) {
  return a + b + c
}

f2 = bind(f, null, 1, 2)
// f2(5) -> 8