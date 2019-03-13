var hasCycle = function (head) {
  if (!head || !head.next) {
    return false
  }
  let fast = head
  let slow = head
  while (head.next) {
    if (!fast) return false
    if (!fast.next) return false
    fast = fast.next.next
    slow = slow.next
    if (fast == slow) return true
  }
  return false
};