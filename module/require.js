
(function(){
  var cache = Object.create(null)
  var fs = require('fs')

  function readFile(path) {
    return fs.readFileSync(path).toString()
  }

  function require2(path) {
    if (path in cache) {
      return cache[path].exports
    }

    var code = readFile(path)
    var moduleFunction = new Function('module, exports', code)

    // function moduleFunction(module, exports) {
    //   exports.version = 8
    //   exports.foo = function(){}
    // }

    var module = {exports: {}}
    cache[path] = module
    //创建变量并马上防放到缓存中，解决循环依赖的问题（递归爆栈）

    var moduleReturn = moduleFunction(module, module.exports)

    if (moduleReturn !== undefined) {
      cache[path] = moduleReturn
      return moduleReturn
    } else {
      return module.exports
    }
  }

  global.require2 = require2
}())



var weekDay = require2('weekday.js')


console.log(weekDay)
