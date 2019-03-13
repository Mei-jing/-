var removeElements = function (head, val) {
  if (!head) return null
  let node = new ListNode(0)   //创建假节点
  node.next = head          //指向头节点
  let pre = node            //创建pre储存前一个节点的值 开始是假节点     
  while (head) {
    if (head.val !== val) {       //当head的值 != val 的时候继续往下走
      pre = head
      head = head.next
    } else {                      //否则跳过当前节点
      pre.next = head.next
      head = head.next
    }
  }
  return node.next
}
