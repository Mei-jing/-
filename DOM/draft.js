el.addEventListener('mousemove', _.debounce(f, 500))
el.addEventListener('mousemove', _.throttle(f, 500))

function debounce(f, duration) {
  var id
  return function (...args) {
    clearTimeout(id)
    id = setTimeout(f.bind(this, ...args), duration)
  }
}

function throttle(f, duration) {
  var lastTime = 0
  return function () {
    var now = Date.now()
    if (now - lastTime > duration) {
      lastTime = now
      f.call(this, ...args)
    }
  }
}