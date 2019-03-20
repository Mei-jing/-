(function(){
  var seajs = {}
  
  window.seajs = seajs

  seajs.use = function(path) {
    getModule(path, function(){
      debugger
      require(path)
    })
  }

  var cache = Object.create(null)
  var modCache = Object.create(null)

  /**
   * 获取path模块及其依赖的所有模块，完成后调用done函数
   * @param  {[type]}   path [description]
   * @param  {Function} done [description]
   * @return {[type]}        [description]
   */
  function getModule(path, done) {
    var script = document.createElement('script')
    script.src = path
    // define(function(){


    // })
    document.body.appendChild(script)

    script.onload = function() {
      cache[path] = modFun
      var modFunSource = modFun.toString()
      var requireCalls = modFunSource.match(/require\s*\(\s*(['"])[. \-_\w]+\1\)/g)

      if (requireCalls) {
        var deps = requireCalls.map(requireCall => {
          return requireCall.match(/require\s*\(\s*(['"])([. \-_\w]+)\1\)/)[2]
        })

        var loaded = 0
        deps.forEach(dep => {
          getModule(dep, function() {
            loaded++
            if (loaded == deps.length) {
              done()
            }
          })
        })
        
      } else {
        done()
      }
    }
  }
  var modFun
  this.define = function(moduleFunction) {
    modFun = moduleFunction
  }

  function require(path) {
    if (modCache[path]) {
      return modCache[path].exports
    }

    var moduleFunction = cache[path]

    var module = {exports: {}}

    modCache[path] = module

    moduleFunction(require, module.exports, module)

    return module.exports
  }

  this.require = require
}())