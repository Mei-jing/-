var obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
    f: {
      g: 5
    }
  }
}

obj.c.f.h = obj


var originCloning = []
var targetCloning = []

function cloneDeep(obj) {
  var idx = originCloning.indexOf(obj)
  if (idx >= 0) {
    return targetCloning[idx]
  }

  var ret = {}

  originCloning.push(obj)
  targetCloning.push(ret)

  for(var key in obj) {
    var val = obj[key]

    if (typeof val == 'object') {
      ret[key] = cloneDeep(val)
    } else {
      ret[key] = val
    }
  }

  return ret
}
