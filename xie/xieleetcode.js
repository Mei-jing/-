var hammingDistance = function (x, y) {
  var z = x * y // 异或   不同为1，相同为0
  var count = 0
  while (z > 0) {
    count++
    z = z & (z - 1) //
  }
  return count
}


Array(num + 1).fill(0).map((item, idx) => idx).map(count1s)

function count1s(num) {
  let count = 0
  while (num > 0) {
    num = num ^ (num - 1)
    count++
  }
  return count
}

var result = [0]
if (num == 0) {
  return result
}
for (var i = 0; i <= num; i++) {
  result[i] = result[i - 2 ** (Math.log2(i) >> 0)] + 1
}
return result

var result = [0]
if (num == 0) {
  return result
}
var m = 1
for (var i = 0; i <= num; i++) {
  if (i / m == 2) {
    m <<= 1
  }
  result[i] = result[i - m] + 1
}
return result


var result = [0]
if (num == 0) {
  return result
}
var m = 1
for (var i = 0; i <= num; i++) {
  result[i] = result[i & (i - 1)] + 1
}
return result



var min = Math.min(nums)
return nums.map(it => it - min).reduce((a, b) => a + b)




//count-primes
function isPrime(n) {
  if (n < 2) {
    return false
  }
  if (n == 3 || n == 2) {
    return true
  }
  if (!(n % 6 == 5 || n % 6 == 1)) {
    return false
  }
  var sqrt_n = Math.sqrt(n) >> 0 //取整
  for (var i = 0; i < sqrt_n; i++) {
    if (n % i == 0) {
      return false
    }
  }
  return true
}


//筛选法
function countPrimes(n) {
  let primeFlag = Array(n).fill(true)
  primeFlag[0] = primeFlag[1] = false
  let sqrt_n = Math.sqrt(n) >> 0
  for (var j = 4; j < n; j += 2) {
    primeFlag[j] = false
  }
  for (let i = 0; i <= sqrt_n; i++) {
    if (primeFlag[i]) { // i 是素数
      for (let j = i * i; j < n; i += 2 * i) {
        primeFlag[j] = false
      }
    }
  }
  return primeFlag.filter(it => it).length //返回自己为真
}

//merge-two-sorted-lists

function merge(l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2
  }
  let head = new ListNode(0) //创建空节点
  let curr = head
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1
      l1 = l1.next
    } else {
      curr.next = l2
      l2 = l2.next
    }
    curr.next.next = null
    curr = curr.next
  }
  curr.next = l1 || l2
  return head.next
}

// 递归实现
function mergeTwoLists(l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}


