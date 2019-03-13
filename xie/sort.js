function swap(ary,i,j){

  let t = ary[i]
  ary[i] = ary[j ]
  ary[j] = t
}


//冒泡排序
function bubbleSort(ary) {
  let t = 0 // 创建中间变量
  for (let i = ary.length; i >= 0; i--) {
    let swap = false // 初始值 false true 进入循环，一直没有循环 return ary
    for (let j = 0; j <= i; j++) {
      if (ary[j] > ary[j + 1]) {
        t = ary[i]
        ary[j] = ary[j + 1]
        ary[j + 1] = t
        swap = true
      }
    }
    if (!swap) {
      return ary
    }
  }
}


//选择排序
function selectSort(ary) {
  for (let i = 0; i < ary.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < ary.length; j++) {
      if (ary[j] < minIndex) {
        minIndex = j
      }
    }
    if(minIndex !== i){
      swap(ary, minIndex, i)
    }
  }
  return ary
}

//将 val插入 BST 中
//并返回 bst 的根节点
function insertIntoBST(bst, val) {
  if (!bst) {
    return {
      val: val,
      left: null,
      right: null,
    }
  } else {
    if (val < bst.val) {
      bst.left = insertIntoBST(bst.left, val)
    } else {
      bst.right = insertIntoBST(bst.right, val)
    }
    return bst
  }
}

function bstSort(ary) {

  // 原始版本
  var bst = null
  for (let val of ary) {
    bst = insertIntoBST(bst, val)
  }
  // reduce 改写
  var bst = ary.reduce((bst, val) => {
    return insertIntoBST(bst, val)
  }, null)

  // reduce 简化
  var bst = ary.reduce(insertIntoBST, null)

  let result = []
  insertIntoBST(bst, function (val) {
    result.push(val)
  })
  return result
}


// 归并排序  时间复杂度（N * logN） 空间复杂度（N）
function mergeSort(ary) {
  if (ary.length < 2) {
    return ary.slice() //返回本身     slice 返回新数组，不改变原数组
  }
  let mid = ary.length >> 1
  let leftAry = ary.slice(0, mid)
  let rightAry = ary.slice(mid)
  let sortedLeft = mergeSort(leftAry)
  let sortedRight = mergeSort(rightAry)

  let result = []
  while (sortedLeft.length && sortedRight.length) {
    if (sortedLeft[0] < sortedRight[0]) {
      result.push(sortedLeft.shift())
    } else {
      result.push(sortedRight.shift())
    }
    result.push(...sortedLeft, ...sortedRight)
    return result
  }
}

function mergeSort(ary) {
  if (ary.length < 2) {
    return ary.slice()
  }
  var mid = ary.length >> 1
  var leftAry = ary.slice(0, mid)
  var rightAry = ary.slice(mid)
  var sortedLeft = mergeSort(leftAry)
  var sortedRight = mergeSort(rightAry)

  var result = []
  var i = 0
  var j = 0
  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] < sortedRight[j]) {
      result.push(sortedLeft[i++])
    } else {
      result.push(sortedRight[j++])
    }
  }

  while (i < sortedLeft.length) {
    result.push(sortedLeft[i++])
  }
  while (j < sortedLeft.length) {
    result.push(sortedLeft[j++])
  }
  return result
}

function mergeSort(ary) {
  if (ary.length < 2) {
    return ary.slice()
  }
  var mid = ary.length >> 1
  var leftAry = ary.slice(0, mid)
  var rightAry = ary.slice(mid)
  var sortedLeft = mergeSort(leftAry)
  var sortedRight = mergeSort(rightAry)

  var result = []
  var i = 0
  var j = 0
  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] < sortedRight[j]) {
      result.push(sortedLeft[i++])
    } else {
      result.push(sortedRight[j++])
    }
  }

  while (i < sortedLeft.length) {
    result.push(sortedLeft[i++])
  }
  while (j < sortedLeft.length) {
    result.push(sortedLeft[j++])
  }
  return result
}


// 快排
function quick(ary) {
  if (ary.length < 2) {
    return ary.slice()
  }

  let pivotIndex = Math.random() * ary.length >> 0
  let pivot = ary[pivotIndex]

  let left = []
  let mid = []
  let right = []

  for (let item of ary) {
    if (item < pivot) {
      left.push(item)
    } else if (item > pivot) {
      right.push(item)
    } else {
      mid.push(item)
    }
  }
  return [...quick(left), ...mid, ...quick(left)]
}

function quickSort2(ary, left = 0, right = ary.length - 1) {
  if (right - left <= 0) {
    return ary
  }

  var pivotIndex = Math.floor(Math.random() * (right - left + 1) + left)
  var pivot = ary[pivotIndex]

  swap(ary, right, pivotIndex)
  for (var i = left - 1, j = left; j < right; j++) {  // 这里用 let 声明变量 外面 i 访问不到
    if (ary[j] < pivot) {
      i++
      swap(ary, i, j)
    }
  }
  i++
  swap(ary, right, i)
  quickSort2(ary, left, i - 1)
  quickSort2(ary, i + 1, right)
  return ary
}

//判断函数

function isSorted(ary) {
  if (ary.length < 2) {
    return ary.slice()
  }
  let tail = ary.slice(1)
  return tail = every((item, index) => {
    return it >= ary[index]
  })
}

 // function quickSort3(ary, left = 0, right = ary.length - 1) {
  //   var i = left
  //   var j = right
  //   var pivotIndex = ...
  //   var pivot = ary[pivotIndex]

  //   while(i <= j) {
  //     while(ary[i] < pivot && i < j) {
  //       i++
  //     }
  //     while(ary[j] > pivot && i < j) {
  //       j--
  //     }
  //     swap(ary, i, j)
  //   }
  //   xxxx


  // }

/*排序算法的稳定性：
  指排序前后，相同元素的相对位置是否发生变化
  如果发生变化，则称此排序算法为不稳定的算法
  如果不发生变化，则称此排序算法为稳定的算法

  选择：不稳定
  bst / 插入：稳定
  冒泡：稳定
  快排：不稳定
*/



