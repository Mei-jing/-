ajax("foo.json", {
  method: "get",
  headers: {
    "Content-Type": "application/json",
    "X-Requsted-By": "ajax helper function",
  },
  data: "xxxxx",
  success: function (data) {},
  error: function (error) {},
})

// 极简
ajax('foo.json', {
  method: 'get',
  headers: {
    "Content-Type": 'application/json',
    "X-Requsted-By": 'ajax helper function',
  },
  data: "xxxxx",
  success: function (data) {},
  error: function (error) {},
})

function ajax(url, options) {
  var xhr = new XMLHttpRequest()
  xhr.open(options.method, url)
  if (options.headers) {
    for (var key in options.headers) {
      var val = options.headers[key]
      xhr.setRequestHeader(key, val)
    }
  }

  xhr.addEventListener('load', function () {
    options.success(xhr.responseText)
  })

  xhr.addEventListener('error', function (e) {
    options.error(e)
  })

  xhr.send(options.data)
}