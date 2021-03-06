// 把根结点在rootPos位置的顺序存储的二叉树
// 转换为一个链式二叉树（二叉链表）
function ary2tree(ary, rootPos = 0) {
  if (ary.length == 0) {
    return null
  }
  if (rootPos > ary.length - 1) {
    return null
  }
  if (ary[rootPos] === null) {
    return null
  }

  return {
    val: ary[rootPos],
    left: ary2tree(ary, rootPos * 2 + 1),
    right: ary2tree(ary, rootPos * 2 + 2),
  }
}

// 将二叉树root放入一个数组
// 根结点放在rootPos的位置
function tree2ary(root) {
  return recusive(root)

  function recusive(root, ary = [], rootPos = 0) {
    if (!root) {
      return []
    }
    ary[rootPos] = root.val
    recusive(root.left, ary, rootPos * 2 + 1)
    recusive(root.right, ary, rootPos * 2 + 2)
    return ary
  }
}

function ary2treeLC(ary) {
  if (ary.length == 0) {
    return null
  }
  var rootNode = {
    val: ary[0],
    left: null,
    right: null,
  }
  var queue = [rootNode]
  var leftUsed = false
  for (var i = 1; i < ary.length; i++) {
    var val = ary[i]
    if (val) {
      var node = {
        val: val,
        left: null,
        right: null
      }
      queue.push(node)
    } else {
      node = null
    }
    if (!leftUsed) {
      queue[0].left = node
      leftUsed = true
    } else {
      queue[0].right = node
      leftUsed = false
      queue.shift()
    }
  }
  return rootNode
}

function condensedArray2Tree(ary) {
  if (ary.length === 0) {
    return null
  }
  var queue = []
  var root = {
    val: ary[0],
    left: null,
    right: null
  }

  queue.push(root)

  var node

  for (var i = 1; i < ary.length; i++) {
    node = queue.shift()
    if (ary[i] != null) {
      node.left = {
        val: ary[i],
        left: null,
        right: null
      }
      queue.push(node.left)
    }

    i++

    if (ary[i] != null) {
      node.right = {
        val: ary[i],
        left: null,
        right: null
      }
      queue.push(node.right)
    }

  }

  return root
}

function tree2aryLC(root) {
  if (!root) {
    return []
  }
  var result = []
  var queue = [root]

  while (queue.length) {
    var node = queue.shift()
    if (node) {
      result.push(node.val)
      queue.push(node.left, node.right)
    } else {
      result.push(null)
    }
  }

  return result
}

function tree2condensedArray(root) {
  if (!root) {
    return []
  }
  var result = [root.val]

  var queue = [root]
  var node

  while (node = queue.shift()) {
    if (node.left) {
      result.push(node.left.val)
      queue.push(node.left)
    } else {
      result.push(null)
    }

    if (node.right) {
      result.push(node.right.val)
      queue.push(node.right)
    } else {
      result.push(null)
    }
  }

  return result
}

function preOrderTraverse(root, action) {
  if (root) {
    action(root.val)
    preOrderTraverse(root.left, action)
    preOrderTraverse(root.right, action)
  }
}

function inOrderTraverse(root, action = console.log) {
  if (root) {
    inOrderTraverse(root.left, action)
    action(root.val)
    inOrderTraverse(root.right, action)
  }
}

function postOrderTraverse(root, action = console.log) {
  if (root) {
    postOrderTraverse(root.left, action)
    postOrderTraverse(root.right, action)
    action(root.val)
  }
}