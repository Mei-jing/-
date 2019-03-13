var isMonotonic = function (A) {
  if(A.length ==1){
    return true
  }
  var len = 0
  var i = 0
  while (len < A.length && A[i] <= A[i + 1]) {
    if (A[i] <= A[i + 1]) {
      len++
      i++
    }
    if (len == A.length - 1) {
      return true
    }
  }
  var len = 0
  var i = 0    //好烦    简单的重新声明变量都想不明白
  while (len < A.length && A[i] >= A[i + 1]) {
    if (A[i] >= A[i + 1]) {
      len++
      i++
    }
    if (len == A.length - 1) {
      return true
    }
  }
  return false
}