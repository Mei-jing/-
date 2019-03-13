function array2list(ary) {
  if (ary.length == 0) {
    return null
  }
  let nodes = []
  for (let i = 0; i < ary.length; i++) {
    let node = {
      val: ary[i],
      next: null,
    }
    nodes.push(node)
  }
  for (let i = 0; i < nodes.length - 1; i++) { //最后一个节点不考虑
    nodes[i].next = nodes[i + 1]
  }

  return nodes[0]
}

function arrayToList(ary) {
  if (ary.length == 0) {
    return null
  }

  let head = { //创建头节点
    val: ary[0],
    next: null
  }

  let pre = head //保存头节点

  for (let i = 0; i < ary.length; i++) {

    let node = {
      val: ary[i],
      next: null
    }

    pre.next = node
    pre = node
  }

  return head
}

function arrayToListRecusive(ary) { //O(n^2)
  if (ary.length === 0) {
    return null
  }

  let head = {
    val: ary[0],
    next: null,
  }

  let tail = ary.slice(1) //头节点不动
  let tailHead = arrayToListRecusive(tail)
  head.next = tailHead
  return head
}


//把数组从第 start 项开始的元素转换成链表
//返回转换后的头节点
function arrayToListRecusive2(ary, start = 0) { //0(n)
  if (ary.length === 0 || start === ary.length) { //start 的数值一直在变
    return null
  }

  let head = {
    val: ary[start],
    next: null,
  }

  let tailHead = arrayToListRecusive(tail, start + 1)
  head.next = tailHead
  return head

}


function listToArray(head) {
  let result = []
  while (head) {
    result.push(node.value) //取
    head = head.next //存
  }
  return result
}

function listToArrayRecusive(head) {
  if (head == null) {
    return []
  }

  let firstValue = head.value
  let tail = head.next
  let tailArray = listToArrayRecusive(tail)
  tailArray.unshift(firstValue)
  return tailArray
}

function prepend(val, head) {
  return {
    val: val,
    next: head,
  }
}

function append(val, head) {
  let newNode = {
    val: val,
    next: null,
  }
  if (!head) {
    return newNode
  }

  let p = head
  while (p.next) {
    p = p.next
  }

  p.next = newNode

  return head
}

function nth(head, n) {
  if (!head) {
    return undefined
  }
  let p = head
  let c = 0
  while (p) {
    if (c == n) {
      return p.value
    }
    c++
    p = p.next
  }
  return undefined
}

var reverseList = function (head) {
  if (!head || !head.next) { //空链表或者链表长度为1
    return head
  }
  let a = null
  let b = head
  let c = head.next
  while (c) {
    a = b
    b = c
    c = c.next
    b.next = a
  }
  return b
};

//给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
//给定 1->2->3->4, 你应该返回 2->1->4->3.
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head
  }
  let a = head
  let b = head.next    
  let c = head.next.next
  b.next = a        //next 改变是指向
  a.next = swapPairs(c)  
  return b      //现在 b 是 head
};