var isAdditiveNumber = function (num) {
  for (var i = 1; i < num.length / 2; i++) {
    var firstNum = num.substr(0, i)
    if (firstNum[0] == "0" && firstNum != "0") return false
    for (var j = 1; j < num.length - i; j++) {
      var num1 = Number(firstNum)
      var secondNum = num.substr(i, j)
      var num2 = Number(secondNum)
      if (secondNum[0] == "0" && secondNum != '0') break
      var m = i + j
      var num3 = num1 + num2
      var thirdNum = num3 + ''
      while (num.indexOf(thirdNum, m) == m) { //进入这个循环
        m = m + thirdNum.length //移动第三个数字的开始下标
        if (m == num.length) { // 结束条件
          return true
        }
        [num1, num2] = [num2, num3] //重置
        num3 = num1 + num2 //新的第三个值
        thirdNum = num3 + ''
      }
    }
  }
  return false
};