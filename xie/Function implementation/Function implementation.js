/*[1,2,3,4,5,6].reduce(average)
如何实现average函数使得上面的表达式返回数组元素的平均数。
*/
[1, 2, 3, 4, 5, 6].reduce(function (lastRes, val, index) {
  return (lastRes * index + val) / (index + 1)
})


//不使用...实现bind
function bind(f, omit) {
  var fixedArgs = []
  for (var i = 2; i < arguments.length; i++) {
    fixedArgs.push(arguments[i])
  }
  return function () {
    var args = []
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i])
    }
    return f.apply(null, fixedArgs.concat(args))
  }
}

function every(ary, test) {
  for (var i = 0; i < ary.length; i++) {
    if (!test(ary[i], i, ary)) {
      return false
    }
  }
  return true
}

function some(ary, test) {
  return !every(ary, function (...args) {
    return !test(...args)
  })
}


function some(ary, test) {
  for (var i = 0; i < ary.length; i++) {
    if (test(ary[i], i, ary)) {
      return true
    }
  }
  return false
}

function every(ary, test) {
  return !some(ary, (...args) => !test(...args))
}


function groupBy(ary, f) {
  let result = {}
  for (let i = 0; i < ary.length; i++) {
    let key = f(ary[i], i, ary)
    if (key in result) {
      result[key].push(ary[i])
    } else {
      result[key] = [aru[i]]
    }
  }
}

{
  key: [obj1, obj2, obj3]
  key2: [obj5, obj8, obj9]
}

//groupBy 函数
function groupBy(ary, predicate) {
  var result = {}
  for (var i = 0; i < ary.length; i++) {
    var key = predicate(ary[i], i, ary)
    if (key in result) {
      result[key].push(ary[i])
    } else {
      result[key] = [ary[i]]
    }
  }
  return result
}

// mapValue 函数
function mapValues(obj, mapper) {
  var result = {}
  for (var key in obj) {
    var val = obj[key]
    result[key] = mapper(val)
  }
  return result
}

//  mapValues({
//      a: 1,
//      b: 2,
//      c: 3
//    }, it => it * it)

//    -> {
//      a: 1,
//      b: 4,
//      c: 9
//    }


function flattenDeep(ary) {
  return flattenDepth(ary, Infinity)
}

function flattenDepth(ary, depth = 1) {
  if (depth == 0) {
    return ary.slice()
  }
  return ary.reduce((result, item) => {
    if (Array.isArray(item)) {
      result.push(...flattenDepth(item, depth - 1))
    } else {
      result.push(item)
    }
    return result
  }, [])
}


function flattenDepth(ary, depth = 1) {
  while (depth--) {
    ary = flatten(ary)
  }
  return ary
}

function flattenDeep(ary) {
  return flattenDepth(ary, Infinity)
}

function flattenDeep(ary) {
  var result = []
  for (var item of ary) {
    if (Array.isArray(item)) {
      result.push(...flattenDeep(item))
    } else {
      result.push(item)
    }
  }
  return result
}

var flattenDeep = ary => ary.reduce((result, item) => (Array.isArray(item) ? result.push(...flattenDeep(item)) : result.push(item), result), [])


function flattenDeep(ary) {
  return ary.reduce((result, item) => {
    if (Array.isArray(item)) {
      result.push(...flattenDeep(item))
    } else {
      result.push(item)
    }
    return result
  }, [])
}

function flatten(ary) {
  // return flattenDepth(ary)
  // return [].concat(...ary)
  var result = []

  for (var item of ary) {
    if (Array.isArray(item)) {
      for (var val of item) {
        result.push(val)
      }
    } else {
      result.push(item)
    }
  }

  return result
}


// 过滤数组返回唯一值
array1.filter(value => -1 !== array2.indexOf(value));


//先写好原型，再构造实例

a = {}
Object.defineProperty(a, baz, {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 999,
})
// => a {baz:999}

Object.prototype.hasOwnProperty.call(a, "hasOwnProperty")

function hasOwn(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}

var hasOwn = Object.prototype.hasOwnProperty
for (var prop in a) {
  if (hasOwn.call(a, prop)) {
    console.log(prop)
  }
}

var hasOwn = Object.prototype.hasOwnProperty
for (var prop in a) {
  if (hasOwn.call(a, prop)) {
    console.log(prop)
  }
}

function forOwn(a, prop, iterator) {
  var hasOwn = Object.prototype.hasOwnProperty
  for (var prop in a) {
    if (hasOwn.call(a, prop)) {
      iterator(a[prop], prop, a) // 属性值，属性名，对象
    }
  }
}


Object.create(null)
Object.setPrototypeOf(obj, null)
obj.__proto__ = null

// 返回一个以 proto 为原型的对象
function creat(proto) {
  function Object() {}
  Object.prototype = proto
  return new Object()
}

if (typeof Object.create !== "function") {
  Object.create = function (proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
      throw new TypeError('Object prototype may only be an Object: ' + proto);
    } else if (proto === null) {
      throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
    }

    if (typeof propertiesObject != 'undefined') throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");

    function F() {}
    F.prototype = proto;

    return new F();
  };
}

function assign(target, ...sources) {
  for (let source of sources) {
    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = sources[key]
      }
    }
  }
  return target
}


