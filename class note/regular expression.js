//raw的实现
function raw(parts, ...interpolation) {
  var result = parts.raw[0]
  for (var i = 1; i < parts.raw.length; i++) {
    result += interpolation[i - 1] + parts.raw[i]
  }
  return result
}