//学习数据结构与算法 第五章 链表
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  let firstPtr = head;
  let secondPtr = head.next;
  while (secondPtr != null) {
    // remove repeat element
    if (firstPtr.val === secondPtr.val) {
      firstPtr.next = secondPtr.next;
      secondPtr = secondPtr.next;
    } else {
      firstPtr = secondPtr;
      secondPtr = secondPtr.next;
    }
  }
  return head;
};

var deleteDuplicates = function (head) {
  if (!head || !head.next) return head
  let curr = head
  while (curr.next) { //如果是 curr 读取不到值
    if (curr.val == curr.next.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }
  return head
};