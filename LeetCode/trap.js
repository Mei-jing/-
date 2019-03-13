var trap = function (height) {
  let left = 0
  let right = height.length - 1
  let leftMax = 0
  let rightMax = 0
  let result = 0
  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left])
      result += leftMax - height[left]
      left++
    } else {
      rightMax = Math.max(rightMax, height[right])
      result += rightMax - height[right]
      right--
    }
  }
  return result
};