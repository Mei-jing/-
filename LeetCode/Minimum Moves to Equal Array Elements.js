// s + (n-1) * m = x * n
// m = s - min
//可以这么理解，如果每次都加 n-1，那么除了最大的那个数，其他数都需要加，对于最小的数，每次增加都有它的份，所以可得。
var minMoves = function (nums) {
  nums.sort((a, b) => {
    return a - b
  })
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  return result = sum - nums[0] * nums.length
};


function isAllEqual(ary) {
  return ary.reduce((value, index) => {
    if (value[index] !== ary[0]) {
      return false;
    } else {
      return true;
    }
  }, 0);
}