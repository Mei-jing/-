var removeNthFromEnd = function (head, n) {
  let fast = head
  let slow = head
  for (let i = n; i > 0; i--) {
    fast = fast.next
  }
  if (fast == null) {
    return head.next
  }

  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return head
};