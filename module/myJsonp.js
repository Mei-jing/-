// http://api.weather.cn/josnp?city=hangzhou
// https://api.douban.com/v2/movie/search?q=阿丽塔

//  1
function myJsonp(url, callback, errCallback, timeoutCallback) {
  //避免多个 jsonp 请求产生冲突
  var callbackName = 'JSONP_CALLBACK_' + Data.now() + '_' + Math.random().toString().slice(2)
  window[callbackName] = callback //创建一个全局变量的指向
  url = url + '&callback=' + callbackName

  var runned = false

  var script = document.createElement('script')
  script.src = url

  script.onerror = function (e) {
    if (!runned) {
      errCallback(e)
      runned = true
    }
  }

  script.onload = function () {
    if (!runned) {
      document.body.removeChild(script)
      delete window[callbackName]
      runned = true
    }

  }

  setTimeout(() => {
    if (!runned) {
      timeoutCallback()
      runned = true
    }
  }, 10000)

  document.body.appendChild(script)
}


// 2 

function myJsonp(url, options) {
  //避免多个 jsonp 请求产生冲突
  var callbackName = 'JSONP_CALLBACK_' + Data.now() + '_' + Math.random().toString().slice(2)
  window[callbackName] = options.onSuccess //创建一个全局变量的指向
  url = url + qs.stringify(options.params) + '&callback=' + callbackName

  var runned = false

  var script = document.createElement('script')
  script.src = url

  script.onerror = function (e) {
    if (!runned) {
      options.onError(e)
      runned = true
    }
  }

  script.onload = function () {
    if (!runned) {
      document.body.removeChild(script)
      delete window[callbackName]
      runned = true
    }

  }

  setTimeout(() => {
    if (!runned) {
      options.onTimeout()
      runned = true
    }
  }, 10000)

  document.body.appendChild(script)
}

myJsonp(url,{
  params: {
    search:'alita',
    year:'2015',
  },
  timeout: 5000,
  onSuccess: function() {

  },
  onError: function() {

  },
  onTimeout: function() {

  }
})

// 3  没有 onError 和 onTimeout

function myJsonp(url, options) {
  var defaultOption = {
    params: {},
    timeout: 10000,
    onSuccess: function(data) {
      throw new Error('no success callback provided')
    },
    onError: function() {
      throw new Error('no error callback provided')
    },
    onTimeout:function() {
      throw new Error('no timeout callback provided')
    }
  }

  // var options = Object.assign(defaultOption,options)
  var options = _.merge(defaultOption,options)  // 两个对象深度合并

  var callbackName = 'JSONP_CALLBACK_' + Data.now() + '_' + Math.random().toString().slice(2)
  window[callbackName] = options.onSuccess 
  // window[callbackName] = options.onSuccess || defaultOption.onSuccess
  url = url + qs.stringify(options.params) + '&callback=' + callbackName

  var runned = false

  var script = document.createElement('script')
  script.src = url

  script.onerror = function (e) {
    if (!runned) {
      options.onError(e)
      runned = true
    }
  }

  script.onload = function () {
    if (!runned) {
      document.body.removeChild(script)
      delete window[callbackName]
      runned = true
    }

  }

  setTimeout(() => {
    if (!runned) {
      options.onTimeout()
      runned = true
    }
  }, 10000)

  document.body.appendChild(script)
}

myJsonp(url,{
  params: {
    search:'alita',
    year:'2015',
  },
  timeout: 5000,
  onSuccess: function() {

  },
})