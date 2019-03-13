str.replace(/c|[a-z]?C[a-z]?/g, '')


str.toLowerCase().split('').sort().join('').match(/(.)\1+/g || []).length

try {
  return str.toLowerCase().split('').sort().join('').match(/(.)\1+/g || []).length
} catch (e) {
  return 0
}

function trim(str, c) {
  var escapedc = c.replace(/(?=[^\w ])/g, '\\')
  var re = new RegExp(`^${escapedc}+|${escapedc}+$`, 'gi')
  return str.replace(re, '')
}

function isMatch(str, w) {
  w = w.replace(/(?=[^\w ])(?![?*])/g, '\\')
    .replace(/\?/g, '.')
    .replace(/\*/g, '.*')
  var re = new RegExp('^' + w + '$')
  return re.test(str)
}

function test(re, str) {
  if (re.exec)
}

function search(str, re) {
  var match = re.exec(str)

}

function match(str, re) { // 不考虑 lastIndex
  if (re.global) {
    let result = []
  } else {
    return re.exec(str)
  }
}

function split(str, re) {
  var result = []
  var lastIndex = 0
  re = new RegExp(re.source, re.flags + 'g')
  var match
  while (match = re.exec(str)) {
    result.push(str.slice(lastIndex, match.index))
    result.push(...match.slice(1))
    lastIndex = re.lastIndex
  }
  result.push(str.slice(lastIndex))
  return result
}

str.replace(re, f)

function replace(str, re, f) {
  var result = ''
  var lastIndex = 0
  re = new RegExp(re.source, re.flags.contains('g')?re.flags : re.flags + 'g')
  var match
  while (match = re.exec(str)) {
    result += str.slice(lastIndex, match.index)
    result += f(...match)
    lastIndex = re.lastIndex
  }
  result += str.slice(lastIndex)
  return result
}
replace('fooboocoo',/oo/,function(m)){return m.toUpperCase()}
// => 

function replace(str, re, f) {
  var result = ''
  var lastIndex = 0
  re = new RegExp(re.source, re.flags.contains('g') ? re.flags : re.flags + 'g')
  var match
  while(match = re.exec(str)) {
    result += str.slice(lastIndex, match.index)
    result += f(...match)
    lastIndex = re.lastIndex
  }
  result += str.slice(lastIndex)
  return result
}
