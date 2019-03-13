var n = +prompt()

for (var i = 0; i < n; i++) {
  var m = prompt()
  var x = []
  n.push(m)
}

for (var i = n - 1; i >= 0; i--) {
  console.log(x[i])
}

function inputNnumsAndReverseOutput(n) {
  if (n == 1) {
    console.log(prompt())
  } else {
    var v = prompt()
    inputNnumsAndReverseOutput(n - 1)
    console.log(v)
  }
}

var n = +prompt()
var maxContinues = 0
var continues = 0

for (var i = 0; i < n; i++) {
  var h = +prompt()
  var l = +prompt()
  var isNormal = (h >= 90 && h <= 140) && (l >= 60 && l <= 90)

  // var isNormal = confirm()

  if (isNormal == true) {
    continues++
  } else if (isNormal == false) {
    if (continues > maxContinues) {
      maxContinues = continues
    }
    continues = 0
  }
}

console.log(maxContinues)


for (var i = 81; i <= 350; i++) {
  var n = i

  d70 = n % 7
  d71 = (n - d70) / 7 % 7
  d72 = (n - d70 - d71 * 7) / 7 / 7 % 7

  d90 = n % 9
  d91 = (n - d90) / 9 % 9
  d92 = (n - d90 - d91 * 9) / 9 / 9 % 9

  if ((d70 == d92) && (d71 == d91) && (d72 == d90)) {
    console.log(i)
    console.log('' + d72 + d71 + d70)
    console.log('' + d92 + d91 + d90)
  }
}



function indexOf(ary, searchElement, fromIndex) {
  var undefined
  if (fromIndex = undefined) {
    fromIndex = 0
  }
  for (var i = fromIndex; i < ary.length; i++) {
    if (ary[i] === searchElement) {
      return i
    }
  }
  return -1
}




function slice(ary, start, end) {
  var newstr = []
  end = end || ary.length
  start = start || 0
  for (var i = start; i < end; i++) {
    newstr.push(ary[i])
  }
  return newstr
}


// join 函数
function join(ary, joiner = ",") { //参数的默认值
  result = []
  joiner = String(joiner) //数字等转换为字符串
  var l = ary.length
  for (var i = 0; i < l; i++) { //最后一项之后不加
    result += ary[i] + joiner
  }
  result += ary[i]
  return result
}

function pop(ary) {
  var t = ary[ary.length - 1]
  ary.length = ary.length - 1
  return t
}


function push(ary, ...values) {
  for (var i = 0; i < values.length; i++) {
    ary[ary.length] = values[i]
  }
  return ary.length
}

function unshift(ary, val) {
  for (var i = ary.length; i > 0; i--) {
    ary[i] = ary[i - 1]
  }
  ary[0] = val
}

function reverse(ary) {
  var t = ary.length / 2
  for (var i = 0; i < t; i++) {
    var left = i
    var right = ary.length - left - 1
    var temp = ary[left] //临时变量
    ary[left] = ary[right]
    var [right] = temp
  }

  return ary
}

function max() {
  var result = -Infinity
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] > result) {
      result = arguments[i]
    }
  }
  return result
}

var addStrings = function (num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  let sumstr = ''

  while (i >= 0 || j >= 0 || carry > 0) {
    let m = 0
    let n = 0
    if (i >= 0) {
      m = num1.charCodeAt(i) - 48
      i--
    }

    if (j >= 0) {
      n = num2.charCodeAt(j) - 48
      j--
    }

    sumstr = String.fromCharCode(((m + n + carry) % 10 + 48)) + sumstr
    carry = Math.floor((m + n + carry) / 10)
  }
  return sumstr
};



var moneys = [
  [2], //[0,0]
  [1, 4], //[0,1],[1,1]
  [7, 4, 7],
  [3, 9, 8, 5],
  [3, 6, 8, 0, 7]
]

[x, y][x, y + 1][x + 1, y = 1]

function maxMoneyFrom(x, y) {
  if (x == moneys.length - 1) {
    return moneys[x][y]
  }
  return moneys[x][y] + Math.max(maxMoneyFrom(x, x + 1), maxMoneyFrom(x + 1, y + 1))
}



// 输入n个数并倒序输出
// ===
// 输入1个数a，输入(n-1)个数并倒序输出，输出a

function inputReverse(n) {
  if (n == 0) {
    return
  }
  var a = prompt()
  inputReverse(n - 1)
  console.log(a)
}


function push(ary, val) {

  for (let i = 0; i < val.length; i++) {
    ary[length] = valval[i]
  }
  ary.length
  ary[length] = val
}


function momkeyking(m, n) { //猴子选王   约瑟夫环
  // var momkeystatus = []

  // for(var i =0;i<m;i++){
  //   momkeystatus[i] = true
  // }

  var monkeyStatus = Array(m).fill(true)

  var speak = 0
  var remain = m

  for (let i = 0;; i = (i + 1) % m) {
    if (monkeyStatus[i]) {
      speak++
      if (speak === n) {
        monkeyStatus[i] = false
        speak = 0
        remain--
        if (remain === 1) {
          break
        }
      }
    }
    if (i === monkeyStatus.length - 1) {
      i = -1
    }
  }

  for (let i = 0; i < monkeyStatus.length; i++) {
    if (monkeyStatus[i]) {
      return i + 1 //编号从 1 开始
    }
  }
}


function factorial(n) {
  if (n == 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

function sigma(start, end, f) {
  var result = 0
  for (var x = start; x <= end; x++) {
    result += f(x)
  }
  return result
}

function sin(x) {
  function f(n) {
    return Math.pow(-1, n) * Math.pow(x, 2 * n + 1) / factorial(2 * n + 1)
  }
  return sigma(0, 40, f)
}